import AllCourses from "./AllCourses.jsx"
import Navbar from "./Navbar.jsx"
import SearchFunctionality from "./SearchFunctionality.jsx"
import {useAuth} from "./context/AuthProvider.jsx"
function AllCoursesPage(){
    let {user}=useAuth();
return (
<>

<Navbar/>
{
    (!user)?<h3 style={{marginBottom:"5vh"}}>login to purchase</h3>:""
}

{
    (user)?<SearchFunctionality/>:""
}

<div style={{marginTop:"17vh"}}>
<AllCourses ></AllCourses>
</div>
 
</>
)
}
export default AllCoursesPage