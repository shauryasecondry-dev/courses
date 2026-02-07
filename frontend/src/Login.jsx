import React, { useState } from "react";
import { useAuth } from "./context/AuthProvider.jsx";
import { login } from "./axios/api.js";
import { Link, useNavigate } from "react-router-dom";
import Error from "./Error.jsx";
import Navbar from "./Navbar.jsx";

function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [inp, setInp] = useState({
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
      const res = await login(inp); // ❗ backend Joi validates here

      setUser({
        username: res.data.username,
        email: res.data.email,
      });

      setErrorSuccess({
        status: res.status,
        message: res.data.message,
      });

      navigate("/user/home");
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
                <h4 className="text-center mb-4">Login</h4>

                <Error SuccessError={errorSuccess} />

                <form onSubmit={handelSubmit}>
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

                  <button className="btn btn-primary w-100">
                    Login
                  </button>
                </form>

                <p className="text-center mt-3">
                  Don’t have an account? <Link to="/signup">Signup</Link>
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
