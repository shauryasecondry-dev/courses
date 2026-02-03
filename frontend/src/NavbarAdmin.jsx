import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout.jsx";
import { useAuth } from "./context/AuthProvider.jsx";

function NavbarAdmin() {
  let { user } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top shadow" style={{minHeight:"9vh"}}>
      <div className="container-fluid px-4">
        {/* Left Section - Logo */}
        <div className="d-flex align-items-center">
          <span className="navbar-brand fw-bold mb-0" style={{fontSize: "clamp(18px, 3vw, 24px)"}}>
            CourseHub
          </span>
        </div>
        
        {/* Right Section - Links and Logout */}
        <div className="d-flex gap-2 gap-md-3 align-items-center">
          <Link to="/admin/home" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw", whiteSpace: "nowrap"}}>
            Admin Home
          </Link>
          <Link to="/user/home" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw", whiteSpace: "nowrap"}}>
            User Home
          </Link>
        <Link to="/user/purchase" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw"}}>
        Purchases
        </Link>
          <Link to="/admin/owncourse" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw", whiteSpace: "nowrap"}}>
            Own Courses
          </Link>
          <Link to="/addcoursedata" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw", whiteSpace: "nowrap"}}>
            Add Course
          </Link>
           <Link to="/admin/profile" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw", whiteSpace: "nowrap"}}>
            Profile
          </Link>
          {/* Logout - Extreme Right with Red Color */}
          {user && (
            <div style={{marginLeft: "1vw"}}>
              <Logout />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarAdmin;