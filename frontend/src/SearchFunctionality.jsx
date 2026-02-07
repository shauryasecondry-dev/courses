import React,{useState,useEffect} from 'react'
import { data } from "./axios/api.js";
import { Link } from 'react-router-dom'; // ADD THIS IMPOR
import {useNavigate} from "react-router-dom"
function SearchFunctionality(){
    let navigate=useNavigate();
  let [details, setDetails] = useState([]);
let [search,setSearch]=useState("");
let [filter,setFilter]=useState([])

function handelSearch(event){
setSearch(event.target.value);
console.log(event.target.value)
if(event.target.value.trim()==""){
    setFilter(details)
}
else{

    setFilter(details.filter((ele)=>ele.title.toLowerCase().trim().includes(event.target.value.toLowerCase().trim())))
}
}

async function DetailsAll(){
    let res=await data();
    setDetails(res.data);
   setFilter(res.data)
     
}
useEffect(()=>{
  navigate("/allcourses", { state: { filter } });
},[filter])
useEffect(()=>{
    DetailsAll();
},[])

return(
    <>
   <input
  type="text"
  name="search"
  value={search}
  onChange={handelSearch}
  placeholder="Search courses..."
  style={{
    width: "100%",
    maxWidth: "28vw",
    height: "5vh",
    padding: "0 1vw",
    borderRadius: "0.6vw",
    border: "1px solid #ced4da",
    outline: "none",
    fontSize: "0.95vw",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    transition: "all 0.2s ease-in-out",
  }}
  onFocus={(e) => {
    e.target.style.border = "1px solid #212529";
    e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
  }}
  onBlur={(e) => {
    e.target.style.border = "1px solid #ced4da";
    e.target.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";
  }}
/>

    </>
)
}
export default SearchFunctionality;