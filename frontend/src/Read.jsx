import { useLocation } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar.jsx";

function Read() {
  const location = useLocation();
  const arr = location.state?.arr || [];
  console.log(arr);

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          marginTop: "12vh",
          padding: "3vh 10vw",
          marginBottom: "5vh",
        }}
      >
        <h2
          className="display-5 fw-bold mb-5"
          style={{
            fontSize: "2vw",
          }}
        >
          My Purchased Courses
        </h2>

        {arr.length === 0 ? (
          <p className="text-center fs-5 text-muted">
            No courses purchased yet
          </p>
        ) : (
          arr.map((ele, index) => (
            <div
              key={index}
              className="border-bottom pb-4 mb-5"
            >
              {/* Image */}
              <img
                src={ele.course.image}
                alt={ele.course.title}
                className="img-fluid rounded shadow-sm mb-4"
                style={{
                  width: "50vw",
                  height: "40vh",
                  objectFit: "cover",
                }}
              />

              {/* Title */}
              <h4
                className="fw-bold mb-3"
                style={{
                  fontSize: "2vw",
                }}
              >
                {ele.course.title}
              </h4>

              {/* Creator */}
              <h5
                className="text-muted mb-4"
                style={{
                  fontSize: "1vw",
                }}
              >
                <i className="fa-solid fa-user me-2"></i>
                Created by <span className="fw-semibold">{ele.course.user.username}</span>
              </h5>

              {/* Description */}
              <p
                className="text-secondary mb-4"
                style={{
                  fontSize: "1vw",
                  lineHeight: "1.7",
                }}
              >
                {ele.course.description}
              </p>

              {/* Course Content */}
              <h4
                className="fw-semibold mb-3"
                style={{
                  fontSize: "1.3vw",
                }}
              >
                Course Content
              </h4>
              <p
                className="text-muted text-justify"
                style={{
                  fontSize: "0.95vw",
                  lineHeight: "1.8",
                  textAlign: "justify",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci velit, omnis placeat veritatis delectus unde necessitatibus ullam. Exercitationem ipsa sapiente dicta. Laborum totam odit quod tempore ipsum explicabo architecto magni!
                Quaerat optio debitis obcaecati omnis, nobis a velit nihil. Quae repellat quasi recusandae ex. Laboriosam enim et assumenda ex sunt, consequatur dignissimos, est excepturi, nam necessitatibus reiciendis doloribus suscipit omnis!
                Laboriosam numquam totam sint architecto aliquid officia nobis non assumenda. Ipsa, unde voluptatibus! Quia veritatis ratione quas. Praesentium ab rem possimus ea harum repellat cum obcaecati, optio amet fugiat minima?
                Necessitatibus impedit consequatur ipsa dolores harum magnam unde. Reiciendis explicabo dolore tempore laborum minima obcaecati eos dicta iste. Maiores, provident. Sit natus velit adipisci deserunt animi quisquam quas labore omnis!
                Nisi consectetur dolore recusandae totam quod libero, quas pariatur eveniet architecto, nemo maiores. Error libero reprehenderit maxime ex unde veniam enim deleniti similique earum, soluta fugiat fuga architecto eos qui?
                Illum incidunt voluptates eligendi libero ipsum quam ab fugit magnam minus eaque natus et accusantium, quia est quod a exercitationem? Aliquam cupiditate a nesciunt quos dolore quasi quibusdam facere id.
                Id quaerat exercitationem commodi, ratione voluptatem hic, aperiam alias possimus nihil nobis corrupti suscipit cum aliquid in recusandae facere. Magni adipisci veritatis, hic quo mollitia voluptates. Quae enim labore harum!
                Omnis amet, nam modi ad odio fugiat quidem quia excepturi ipsum alias placeat praesentium dolore ab perferendis suscipit? Porro, dolores? Excepturi atque molestias aut nostrum sequi facere exercitationem dolorum eligendi.
                Consequuntur, vero cupiditate inventore mollitia possimus a iusto labore, voluptatem alias aspernatur excepturi nemo ex at dolor eaque blanditiis. Dignissimos vero atque aperiam ea temporibus libero rem dicta, harum facilis?
                Libero corporis quasi, quas harum itaque maiores, sequi iure unde facilis dignissimos amet cum vitae possimus ipsum praesentium tempora voluptate hic nisi? Esse debitis, molestiae provident tenetur ut minus sed?
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Read;