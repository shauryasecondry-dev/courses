import React, { useState } from "react";
import { signup } from "./axios/api.js";
import { Link, useNavigate } from "react-router-dom";
import Error from "./Error.jsx";
import Navbar from "./Navbar.jsx";

function Signup() {
  const navigate = useNavigate();

  const [inp, setInp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorSuccess, setErrorSuccess] = useState({
    status: null,
    message: "",
  });

  function handelChange(e) {
    setInp({ ...inp, [e.target.name]: e.target.value });
  }

  async function handelSubmit(e) {
    e.preventDefault();

    try {
      const res = await signup(inp); // ❗ backend Joi validates here

      setErrorSuccess({
        status: res.status,
        message: res.data.message,
      });

      setTimeout(() => {
        navigate("/login");
      }, 800);
    } catch (error) {
      setErrorSuccess({
        status: error.response?.status || 500,
        message:
          error.response?.data?.message ||
          "Something went wrong. Try again.",
      });
    }
  }

  return (
    <>
      <Navbar />

      <div style={{ marginTop: "20vh" }}>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="text-center mb-4">Signup</h4>

                <Error SuccessError={errorSuccess} />

                <form onSubmit={handelSubmit}>
                  <div className="mb-3">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      value={inp.username}
                      onChange={handelChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={inp.email}
                      onChange={handelChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={inp.password}
                      onChange={handelChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <button className="btn btn-success w-100">
                    Signup
                  </button>
                </form>

                <p className="text-center mt-3">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
