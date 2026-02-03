import React, { useState, useEffect } from "react";
import { data, purchase } from "./axios/api.js";
import Navbar from "./Navbar.jsx";
import SearchFunctionality from "./SearchFunctionality.jsx";
import { useLocation } from "react-router-dom";

function AllCourses() {
  const [details, setDetails] = useState([]);
  const location = useLocation();

  const filter = location.state?.filter;

  async function addPurchase(id) {
    try {
      let res = await purchase(id);
      console.log(res.status);
    } catch (err) {
      console.log(err);
    }
  }

  async function getData() {
    if (!filter) {
      let res = await data();
      setDetails(res.data);
    } else {
      setDetails(filter);
    }
  }

  useEffect(() => {
    getData();
  }, [filter]);

  return (
    <>
      <Navbar />

      {/* Search */}
      <div style={{ marginTop: "10vh", textAlign: "center" }}>
        <SearchFunctionality />
      </div>

      {/* Cards Container – SAME AS OwnCourses */}
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
                  ₹ {ele.price}
                </h5>

                {/* Instructor */}
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "0.85rem",
                    color: "#555",
                    marginBottom: "1.5vh",
                  }}
                >
                  <i
                    className="fa-solid fa-user"
                    style={{ marginRight: "0.4vw" }}
                  ></i>
                  {ele.user.username}
                </div>

                {/* Purchase Button */}
                <button
                  onClick={() => addPurchase(ele._id)}
                  style={{
                    width: "100%",
                    padding: "0.7vh 0",
                    backgroundColor: "#212529",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0.4vw",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ marginRight: "0.5vw" }}
                  ></i>
                  Enroll
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default AllCourses;
