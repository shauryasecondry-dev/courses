import React, { useState } from "react";
import { signup } from "./axios/api.js";
import { Link } from "react-router-dom";
import Error from "./Error.jsx";
import Navbar from "./Navbar.jsx";

function Signup() {
  let [errorSuccess, setErrorSuccess] = useState({
    status: null,
    message: "",
  });

  let [inp, setInp] = useState({
    username: "",
    email: "",
    password: "",
  });

  let [validated, setValidated] = useState(false);
  let [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
  });

  async function sign() {
    try {
      let res = await signup(inp);
      setErrorSuccess({
        status: res.status,
        message: res.data.message,
      });
    } catch (error) {
      setErrorSuccess({
        status: error.response?.status || 500,
        message:
          error.response?.data?.message || "Cannot connect to server",
      });
    }
  }

  function handelChange(e) {
    setInp({
      ...inp,
      [e.target.name]: e.target.value,
    });

    // Clear error when user starts typing
    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  }

  function handelSubmit(e) {
    e.preventDefault();
    
    // Validate fields
    const newErrors = {
      username: !inp.username || inp.username.length < 3,
      email: !inp.email || !/\S+@\S+\.\S+/.test(inp.email),
      password: !inp.password || inp.password.length < 6,
    };

    setErrors(newErrors);
    setValidated(true);

    // If no errors, submit
    if (!newErrors.username && !newErrors.email && !newErrors.password) {
      sign();
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
                <h4 className="text-center mb-4">
                  Create your account
                </h4>

                <Error SuccessError={errorSuccess} />

                <form onSubmit={handelSubmit} noValidate className={validated ? "was-validated" : ""}>
                  
                  {/* Username Field */}
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        name="username"
                        value={inp.username}
                        onChange={handelChange}
                        className={`form-control ${errors.username ? "is-invalid" : ""}`}
                        required
                      />
                      {errors.username && (
                        <div className="invalid-feedback">
                          <i className="bi bi-exclamation-circle-fill me-1"></i>
                          Username must be at least 3 characters
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={inp.email}
                        onChange={handelChange}
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        required
                      />
                      {errors.email && (
                        <div className="invalid-feedback">
                          <i className="bi bi-exclamation-circle-fill me-1"></i>
                          Please enter a valid email address
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">
                        <i className="bi bi-lock"></i>
                      </span>
                      <input
                        type="password"
                        name="password"
                        value={inp.password}
                        onChange={handelChange}
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        required
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          <i className="bi bi-exclamation-circle-fill me-1"></i>
                          Password must be at least 6 characters
                        </div>
                      )}
                    </div>
                  </div>

                  <Link to="/login"><button 
                    type="submit"
                    className="btn btn-success w-100">
                  
                    <i className="bi bi-person-plus me-2"></i>
                    Signup
                  </button>
                  </Link>
                </form>

                <p className="text-center mt-3 mb-0">
                  Already have an account?{" "}
                  <Link to="/login">Login</Link>
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