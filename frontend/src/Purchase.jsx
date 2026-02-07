import React, { useEffect, useState } from "react";
import { purchaseData } from "./axios/api.js";
import Navbar from "./Navbar.jsx";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider.jsx";

function Purchase() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);

  if (!user) {
    return <Navigate to="/login" />;
  }

  async function infoPurchase() {
    try {
      const res = await purchaseData();
      setArr(res.data || []);
    } catch (err) {
      console.error("Failed to load purchases", err);
    } finally {
      setLoading(false);
    }
  }

  function handelClick(ele) {
    if (!ele || !ele.course) return;
    navigate("/user/purchase/read", { state: { ele } });
  }

  useEffect(() => {
    infoPurchase();
  }, []);

  return (
    <>
      <Navbar />

      <div style={{ marginTop: "12vh", textAlign: "center" }}>
        <h1 style={{ fontWeight: "600" }}>Purchased Courses</h1>
        <p style={{ color: "#666" }}>
          Access all courses you have enrolled in
        </p>
      </div>

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
        {loading ? (
          <h4 style={{ color: "#777" }}>Loading...</h4>
        ) : arr.length === 0 ? (
          <h4 style={{ color: "#777" }}>No purchases found</h4>
        ) : (
          arr.map((ele, index) => {
            if (!ele?.course) return null; // ✅ CRASH FIX

            return (
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
                <img
                  src={ele.course.image}
                  alt={ele.course.title}
                  style={{
                    width: "100%",
                    height: "22vh",
                    objectFit: "cover",
                  }}
                />

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

                  <h5 style={{ textAlign: "center" }}>
                    ₹ {ele.course.price}
                  </h5>

                  <div style={{ textAlign: "center", fontSize: "0.85rem" }}>
                    <i className="fa-solid fa-user"></i>{" "}
                    {ele.course.user?.username}
                  </div>

                  <button
                    onClick={() => handelClick(ele)}
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
            );
          })
        )}
      </div>
    </>
  );
}

export default Purchase;
