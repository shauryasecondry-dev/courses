import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Logout from "./Logout.jsx";
import AddCourseData from "./AddCourseData.jsx";
import AdminHome from "./AdminHome.jsx";
import UserHome from "./UserHome.jsx";
import OwnCourses from "./OwnCourses.jsx";
import Edit from "./Edit.jsx";
import NotFound from "./NotFound.jsx";
import Profile from "./Profile.jsx";
import Purchase from "./Purchase.jsx";
import Read from "./Read.jsx";
import AllCoursesPage from "./AllCoursesPage.jsx";
 

function App() {
  return (
  
 

      
        <Routes>
          <Route path="/" element={<Navigate to="/user/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/addcoursedata" element={<AddCourseData />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/admin/owncourse" element={<OwnCourses />} />
          <Route path="/admin/edit/:id" element={<Edit />} />
          <Route path="/allcourses" element={<AllCoursesPage />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/user/purchase" element={<Purchase />} />
          <Route path="/user/purchase/read" element={<Read />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
 
  );
}

export default App;
