import React from "react";
import Navbar from "./Navbar.jsx";
import AllCourses from "./AllCourses";
import { Link } from "react-router-dom";
import explore from "./assets/explore.jpg"
import manageContent from "./assets/manageContent.jpg"
import purchase from "./assets/purchase.jpg"
import addCourse from "./assets/addCourse.jpg"
 import {useAuth} from "./context/AuthProvider.jsx"
 import SearchFunctionality from "./SearchFunctionality.jsx"
function UserHome() {
  let {user}=useAuth();
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&h=900&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          width: "100vw",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <div style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: "rgba(0,0,0,0.6)" 
        }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1, color: "white", textAlign: "center" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "700", marginBottom: "25px", letterSpacing: "1px" }}>
            Course Management Portal
          </h1>
          <p style={{ fontSize: "1.4rem", marginBottom: "40px", fontWeight: "300" }}>
            Discover, Learn, and Share Knowledge
          </p>
          <Link 
            to="/allcourses" 
            className="btn btn-lg mx-2" 
            style={{ 
              background: "white", 
              color: "#333", 
              border: "none",
              padding: "14px 40px",
              fontWeight: "600"
            }}
          >
            View Courses
          </Link>
          <Link 
            to="/addcoursedata" 
            className="btn btn-lg mx-2" 
            style={{ 
              background: "transparent", 
              color: "white", 
              border: "2px solid white",
              padding: "14px 40px",
              fontWeight: "600"
            }}
          >
            Add Course
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ marginTop: "8vh", marginBottom: "8vh", width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
        <div style={{ maxWidth: "100vw", margin: "0 auto", padding: "0 0.5vw" }}>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ 
                position: "relative", 
                overflow: "hidden", 
                borderRadius: "12px", 
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                height: "100%",
                minHeight: "55vh",
                display: "flex",
                flexDirection: "column"
              }}>
                <img
                  src={explore}
                  alt="Learn"
                  style={{ width: "100%", height: "28vh", objectFit: "cover" }}
                />
                <div style={{ padding: "3vh 2vw", background: "white", flex: "1" }}>
                  <h4 style={{ color: "#2d3748", marginBottom: "2vh", fontWeight: "600", fontSize: "1.5rem" }}>
                    Explore Courses
                  </h4>
                  <p style={{ color: "#718096", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    Browse through a wide variety of courses across different subjects
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ 
                position: "relative", 
                overflow: "hidden", 
                borderRadius: "12px", 
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                height: "100%",
                minHeight: "55vh",
                display: "flex",
                flexDirection: "column"
              }}>
                <img
                  src={purchase}
                  alt="Study"
                  style={{ width: "100%", height: "28vh", objectFit: "cover" }}
                />
                <div style={{ padding: "3vh 2vw", background: "white", flex: "1" }}>
                  <h4 style={{ color: "#2d3748", marginBottom: "2vh", fontWeight: "600", fontSize: "1.5rem" }}>
                    Purchase Courses
                  </h4>
                  <p style={{ color: "#718096", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    Select and purchase courses that match your interests
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ 
                position: "relative", 
                overflow: "hidden", 
                borderRadius: "12px", 
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                height: "100%",
                minHeight: "55vh",
                display: "flex",
                flexDirection: "column"
              }}>
                <img
                  src={addCourse}
                  alt="Teach"
                  style={{ width: "100%", height: "28vh", objectFit: "cover" }}
                />
                <div style={{ padding: "3vh 2vw", background: "white", flex: "1" }}>
                  <h4 style={{ color: "#2d3748", marginBottom: "2vh", fontWeight: "600", fontSize: "1.5rem" }}>
                    Add Courses
                  </h4>
                  <p style={{ color: "#718096", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    Share your knowledge by adding courses to the portal
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ 
                position: "relative", 
                overflow: "hidden", 
                borderRadius: "12px", 
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                height: "100%",
                minHeight: "55vh",
                display: "flex",
                flexDirection: "column"
              }}>
                <img
                  src={manageContent}
                  alt="Manage"
                  style={{ width: "100%", height: "28vh", objectFit: "cover" }}
                />
                <div style={{ padding: "3vh 2vw", background: "white", flex: "1" }}>
                  <h4 style={{ color: "#2d3748", marginBottom: "2vh", fontWeight: "600", fontSize: "1.5rem" }}>
                    Manage Content
                  </h4>
                  <p style={{ color: "#718096", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    Organize and manage your courses effectively
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Courses Section */}
      <div style={{ background: "#f7fafc", padding: "8vh 0", width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
        <div className="container">
          <h2 className="text-center mb-3" style={{ fontWeight: "700", color: "#2d3748", fontSize: "2.5rem" }}>
            Available Courses
          </h2>
          <p className="text-center mb-5" style={{ color: "#718096", fontSize: "1.1rem" }}>
            Browse our complete course catalog
          </p>
 
          {(user)?"":<h3 style={{display:"flex",justifyContent:"center",marginBottom:"2vh"}}>login to Buy Courses</h3>}

          <AllCourses />

        </div>
      </div>
 
    </>
  );
}

export default UserHome;