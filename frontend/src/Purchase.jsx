import React, { useEffect, useState } from "react";
import { purchaseData } from "./axios/api.js";
import Navbar from "./Navbar.jsx";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider.jsx";

function Purchase() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [arr, setArr] = useState([]);

  // 🔐 AUTH CHECK — OUTSIDE useEffect (as you asked)
  if (!user) {
    return <Navigate to="/login" />;
  }

  async function infoPurchase() {
    let res = await purchaseData();
    setArr(res.data);
  }

  function handelClick(e) {
    e.preventDefault();
    navigate("/user/purchase/read", {
      state: { arr },
    });
  }

  useEffect(() => {
    infoPurchase();
  }, []);

  return (
    <>
      <Navbar />

      {/* Heading */}
      <div style={{ marginTop: "12vh", textAlign: "center" }}>
        <h1 style={{ fontWeight: "600" }}>Purchased Courses</h1>
        <h2
          style={{
            fontWeight: "300",
            fontSize: "1.2rem",
            marginTop: "1vh",
            color: "#666",
          }}
        >
          Access all courses you have enrolled in
        </h2>
      </div>

      {/* Cards */}
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
        {arr.length === 0 ? (
          <h4 style={{ color: "#777", fontWeight: "300" }}>
            No purchases found
          </h4>
        ) : (
          arr.map((ele, index) => (
            <div
              key={index}
              style={{
                width: "19vw",
                minWidth: "260px",
                borderRadius: "0.8vw",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                backgroundColor: "#fff",
              }}
            >
              {/* Image */}
              <img
                src={ele.course.image}
                alt={ele.course.title}
                style={{
                  width: "100%",
                  height: "22vh",
                  objectFit: "cover",
                }}
              />

              {/* Content */}
              <div style={{ padding: "1.2vw" }}>
                <h6 style={{ fontWeight: "600" }}>
                  {ele.course.title}
                </h6>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    height: "6vh",
                    overflow: "hidden",
                  }}
                >
                  {ele.course.description}
                </p>

                <h5 style={{ textAlign: "center", fontWeight: "600" }}>
                  ₹ {ele.course.price}
                </h5>

                <div
                  style={{
                    textAlign: "center",
                    fontSize: "0.85rem",
                    color: "#555",
                  }}
                >
                  <i className="fa-solid fa-user"></i>{" "}
                  {ele.course.user.username}
                </div>

                <button
                  onClick={handelClick}
                  style={{
                    marginTop: "1.5vh",
                    width: "100%",
                    height: "4vh",
                    border: "none",
                    borderRadius: "0.4vw",
                    background: "#212529",
                    color: "#fff",
                    fontWeight: "600",
                  }}
                >
                  Read
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Purchase;
