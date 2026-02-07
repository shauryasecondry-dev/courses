import AllCourses from "./AllCourses.jsx"
import Navbar from "./Navbar.jsx"
import SearchFunctionality from "./SearchFunctionality.jsx"
import {useAuth} from "./context/AuthProvider.jsx"
function AllCoursesPage(){
    let {user}=useAuth();
return (
<>

<Navbar/>
   <div style={{width:"99vw",display:"flex",justifyContent:"center",height:"5vh"}}>
   { (!user)?<h3>login to purchase</h3>:""}
    </div>
 

 
 <SearchFunctionality/>
 

<div style={{marginTop:"17vh"}}>
<AllCourses ></AllCourses>
</div>
 
</>
)
}
export default AllCoursesPage