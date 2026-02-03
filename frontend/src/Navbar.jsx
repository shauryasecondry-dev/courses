import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "./context/AuthProvider.jsx"
import Logout from "./Logout.jsx"

function Navbar() {
    let { user } = useAuth();
    const navigate = useNavigate();
    
    function handelClick() {
        if (user) {
            navigate("/admin/home")
        } else {
            navigate("/login");
        }
    }
    
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
                <div className="d-flex gap-2 gap-md-3 align-items-center flex-wrap justify-content-end">
                    {user ? (
                        <>
                            <div className="d-flex gap-1 gap-md-2 align-items-center flex-wrap">
                                <Link to="/admin/home" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw"}}>
                                    Admin
                                </Link>
                                <Link to="/user/home" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw"}}>
                                    User
                                </Link>
 
                                <Link to="/admin/profile" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw"}}>
                                    Profile
                                </Link>
                                <Link to="/user/purchase" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw"}}>
                                Purchases
                                </Link>
                            </div>
                            
                            {/* Logout - Extreme Right with Red Color */}
                            <div style={{marginLeft: "1vw"}}>
                                <Logout />
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw"}}>
                                Login
                            </Link>
                            <Link to="/signup" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw"}}>
                                Signup
                            </Link>
                            <Link to="/user/home" className="btn btn-link text-light text-decoration-none" style={{fontSize: "clamp(12px, 2vw, 15px)", padding: "0.5vw 1vw"}}>
                                Home
                            </Link>
                     
                            <button 
                                className="btn btn-outline-light btn-sm"
                                onClick={handelClick}
                                style={{fontSize: "clamp(12px, 2vw, 14px)", padding: "0.5vw 1.5vw"}}
                            >
                                Add Course
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;