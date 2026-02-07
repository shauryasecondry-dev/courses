import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import multer from 'multer'
import {userMiddleware} from "./userValidation.js"//to check is logged in can acess( req.userId)
import {signupSchema,loginSchema,courseSchema} from "./joiValidation.js" 
import {storage} from './cloudConfig.js'
import User from "./models/User.js"
import Course from "./models/Course.js"
import Purchase from "./models/Purchase.js";
const upload=multer({storage})
const port=process.env.PORT||4000
let app=express();
 dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.use(cors({
  origin: process.env.FRONTEND_URL||"http://localhost:5173",  // ✅ Use environment variable
  credentials: true
}));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}
main().catch(err => console.log(err));
app.listen(port,()=>{
    console.log("on port",port)
})
app.post("/signup",async(req,res)=>{
try{
let {error}=signupSchema.validate(req.body);
if(error){
   return res.status(400).json({message:error.details[0].message})
}
else{
    let {username,email,password}=req.body;
    let user=await User.findOne({email});
    if(user){
       return res.status(401).json({message:"user alrest exist"})
    }
    else{
        let hashPassword=await bcryptjs.hash(password,10)
        let u=new User({username:username,email:email,password:hashPassword});
        await u.save()
       return res.status(200).json({message:"user created"});
    }}
 
}
catch(error){
  return  res.status(500).json({message:error.message})
}
})

app.post("/login",async(req,res)=>{
    try
{let {error}=loginSchema.validate(req.body);
if(error){
   return res.status(400).json({message:error.details[0].message})
}
else{
    let {email,password}=req.body;
    let user=await User.findOne({email});
    if(!user){
       return res.status(400).json({message:"user not found"});
    }
    else{
        let comp=await bcryptjs.compare(password,user.password);
        if(!comp){
          return  res.status(401).json({message:"correct email wrong password"});
        }
        else{
            const token=jwt.sign({
                id:user._id
            },process.env.SECRET)//token created for login
            res.cookie("jwt", token, {
  httpOnly: true,
  sameSite: "lax",
  secure: false   // true ONLY on HTTPS (Render/Vercel)
});

            return res.status(200).json({message:"login success",username:user.username,email:user.email})

        }
    }
}}
catch(error){
   return res.status(500).json({message:error.message});
}
})
app.get("/logout",(req,res)=>{
try{
    res.clearCookie("jwt");
    return res.status(200).json({message:"logged out successfull"})
}
catch(error){
  return  res.status(500).json({message:error.message})
}
})
app.get("/me",userMiddleware,async(req,res)=>{
    try{
    let id=req.userId;
    let user=await User.findById(id);
   return res.status(200).json({username:user.username,email:user.email});}
catch(error){
   return res.status(500).json({message:error.message});
}
})
//admin can add a course
//admin can add a course
app.post("/admin/course",userMiddleware,upload.single("image"),async(req,res)=>{
    try{
        req.body.price = Number(req.body.price);
        let {error} = courseSchema.validate(req.body);
        if(error){
            return res.status(400).json({message:error.details[0].message})
        }
        if(req.body.price==""){
          return  res.status(400).json({message:"price is required"})
        }

        if(!req.file){
            return res.status(404).json({message:"file not found"})
        }
 
        
        // ✅ Destructure once
        let {title, description, price} = req.body;
        let image = req.file.path;
        
        let course = new Course({title, description, price, image,user:req.userId});
        await course.save();
        return res.status(200).json({message:"new course added"});
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
})
//data for all courses
app.get("/data",async(req,res)=>{
    try{
    let user=await Course.find({}).populate("user","-password");
    res.status(200).json(user)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
 
app.delete("/admin/course/:id",userMiddleware,async(req,res)=>{
    try{
    let id=req.params.id;
  
    if(!id){
        res.status(404).json({message:"course not found"})
    }
    let data=await Course.findById(id);
    if(req.userId==data.user._id.toString()){
    let q=await Course.findByIdAndDelete(id);
    console.log(q)
    res.status(200).json({message:"returned the data"})}
    else{
        res.status(400).json({message:"logged in user is not owner"})
    }
}
    catch(error){
        res.status(500).json({message:error.message})
    }

})

app.patch("/admin/course/:id",upload.single("image") ,userMiddleware, async(req,res) => {
    try {
        let id = req.params.id;
            req.body.price = Number(req.body.price);
        let {error} = courseSchema.validate(req.body);
        if(error){
            return res.status(400).json({message:error.details[0].message})
        }
        if(req.body.price==""){
          return  res.status(400).json({message:"price is required"})
        }

        if(!req.file){
            return res.status(404).json({message:"file not found"})
        }
 
        let data = await Course.findById(id);
        
        if(!data) {
            return res.status(404).json({message: "Course not found"});
        }
        
        if(req.userId == data.user._id.toString()) {  // ✅ Add .toString()
            if(req.file) {
                req.body.image = req.file.path;
            }
            
            // ✅ Convert price to number if it exists
            if(req.body.price) {
                req.body.price = Number(req.body.price);
            }

            let q = await Course.findByIdAndUpdate(id, req.body, {new: true});
            return res.status(200).json({message: "Updated successfully"});
        } else {  // ✅ Move else inside try
            return res.status(403).json({message: "You can only update your own courses"});
        }
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
})
//add user middleware only login can purchase a course
app.get("/user/purchase/:id",userMiddleware,async(req,res)=>{
try{
let courseId=req.params.id//user clicking and buying specific course
let userId=req.userId;//current user logged in
 
if(!userId){
   return  res.status(402).json({message:"user dont exist"})
}
if(!courseId){
    return res.status(401).json({message:"course dont exist"})
}
let add=new Purchase({course:courseId,user:userId})
await add.save();
return res.status(200).json(add)}
catch(error){
    res.status(500).json({message:error.message})
}
})
app.get("/user/purchasedata", userMiddleware, async (req, res) => {
  try {
    const id = req.userId; // logged-in user id

    const purchase = await Purchase.find({ user: id })
      .populate({
        path: "course",
        populate: {
          path: "user",
          select: "-password" // course owner without password
        }
      })
      .populate("user", "-password"); // purchaser (logged-in user)

    res.status(200).json(purchase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
 