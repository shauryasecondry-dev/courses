import React, { useState } from "react";
import { useAuth } from "./context/AuthProvider.jsx";
import { login } from "./axios/api.js";
import { Link } from "react-router-dom";
import Error from "./Error.jsx";
import Navbar from "./Navbar.jsx";

function Login() {
  let { setUser } = useAuth();

  let [inp, setInp] = useState({
    email: "",
    password: "",
  });

  let [errorSuccess, setErrorSuccess] = useState({
    status: null,
    message: "",
  });

  let [validated, setValidated] = useState(false);
  let [errors, setErrors] = useState({
    email: false,
    password: false,
  });

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

  async function loginFun() {
    try {
      let res = await login({
        email: inp.email,
        password: inp.password,
      });

      setUser({
        username: res.data.username,
        email: res.data.email,
      });

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

  function handelSubmit(e) {
    e.preventDefault();
    
    // Validate fields
    const newErrors = {
      email: !inp.email || !/\S+@\S+\.\S+/.test(inp.email),
      password: !inp.password || inp.password.length < 6,
    };

    setErrors(newErrors);
    setValidated(true);

    // If no errors, submit
    if (!newErrors.email && !newErrors.password) {
      loginFun();
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
                <h4 className="text-center mb-4">Login to your account</h4>

                <Error SuccessError={errorSuccess} />

                <form onSubmit={handelSubmit} noValidate className={validated ? "was-validated" : ""}>
                  
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

                  <button type="submit" className="btn btn-primary w-100">
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Login
                  </button>
                </form>

                <p className="text-center mt-3 mb-0">
                  Don't have an account?{" "}
                  <Link to="/signup">Signup</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;