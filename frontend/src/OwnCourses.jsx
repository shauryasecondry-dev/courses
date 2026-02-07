import { data } from "./axios/api.js";
import React, { useEffect, useState } from "react";
import { useAuth } from "./context/AuthProvider.jsx";
import NavbarAdmin from "./NavbarAdmin.jsx";
import { Link, Navigate } from "react-router-dom";
import Delete from "./Delete.jsx";
 
function OwnCourses() {
  let { user } = useAuth();
  let [details, setDetails] = useState([]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  async function yourCourse() {
    let res = await data();
    let arr = res.data.filter((ele) => ele.user.email === user.email);
    setDetails(arr);
  }

  useEffect(() => {
    yourCourse();
  }, []);

  return (
    <>
      <NavbarAdmin />

      {/* Heading */}
      <div style={{ marginTop: "12vh", textAlign: "center" }}>
        <h1 style={{ fontWeight: "600" }}>Own Courses</h1>
        <h2 style={{ fontWeight: "300", fontSize: "1.2rem", marginTop: "1vh" }}>
          Add New Courses To Your Collection
        </h2>
      </div>

      {/* Cards Container */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2vw",
          marginTop: "5vh",
          paddingBottom: "5vh",
        }}
      >
        {details.length === 0 ? (
          <h4 style={{ color: "#777", fontWeight: "300" }}>
            No courses available
          </h4>
        ) : (
          details.map((ele) => (
            <div
              key={ele._id}
              style={{
                width: "19vw",              // ✅ adequate increased width
                minWidth: "260px",
                borderRadius: "0.8vw",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                backgroundColor: "#fff",
              }}
            >
              {/* Image */}
              <img
                src={ele.image}
                alt={ele.title}
                style={{
                  width: "100%",
                  height: "22vh",
                  objectFit: "cover",
                }}
              />

              {/* Content */}
              <div style={{ padding: "1.2vw" }}>
                <h6 style={{ fontWeight: "600", marginBottom: "0.5vh" }}>
                  {ele.title}
                </h6>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    height: "6vh",
                    overflow: "hidden",
                  }}
                >
                  {ele.description}
                </p>

                {/* Price */}
                <h5
                  style={{
                    textAlign: "center",
                    margin: "1.5vh 0",
                    fontWeight: "600",
                  }}
                >
                  <i class="fas fa-rupee-sign"></i>{ele.price}
                </h5>

                {/* Actions */}
                <div
                  style={{
                    display: "flex",
                    gap: "1vw",
                  }}
                >
                  <Link
                    to={`/admin/edit/${ele._id}`}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "0.6vh 0",
                      backgroundColor: "#212529",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "0.4vw",
                      fontSize: "0.9rem",
                    }}
                  >
                    Edit
                  </Link>

                  <div style={{ flex: 1 }}>
                    <Delete _id={ele._id} />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
     
    </>

  );
}

export default OwnCourses;
