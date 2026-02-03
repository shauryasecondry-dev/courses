import mongoose from 'mongoose';//add user with each course to shouw your courses
let courseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
         ref:"User"
    }
})
let Course=mongoose.model("Course",courseSchema);
export default Course;