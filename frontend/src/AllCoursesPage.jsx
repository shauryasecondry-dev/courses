import AllCourses from "./AllCourses.jsx"
import Navbar from "./Navbar.jsx"
import SearchFunctionality from "./SearchFunctionality.jsx"
import {useAuth} from "./context/AuthProvider.jsx"
function AllCoursesPage(){
    let {user}=useAuth();
return (
<>

<Navbar/>
   <div style={{width:"99vw",display:"flex",justifyContent:"center",height:"5vh",marginTop:"20vh"}}>
   { (!user)?<h3>login to purchase</h3>:""}
    </div>
 

 <div style={{width:"100vw",justifyContent:"center"}}>
 <SearchFunctionality/>
 </div>
 

<div style={{marginTop:"17vh"}}>
<AllCourses ></AllCourses>
</div>
 
</>
)
}
export default AllCoursesPage