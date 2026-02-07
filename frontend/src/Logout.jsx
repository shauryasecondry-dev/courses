import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "./axios/api.js";
import { useAuth } from "./context/AuthProvider.jsx";
import Error from "./Error.jsx";

function Logout() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [SuccessError, setSuccessError] = useState({
    status: null,
    message: "",
  });

  async function logoutFun() {
    try {
      // API call
      await logout();
     
      // Clear auth state
      setUser(null);
      
      // Success message
      setSuccessError({
        status: 200,
        message: "Logout successful",
      });

      // ✅ Just navigate - NO reload needed!
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 300);

    } catch (error) {
      setSuccessError({
        status: error.response?.status || 500,
        message: error.response?.data?.message || "Cannot connect to server",
      });
    }
  }

  return (
    <>
      <Error SuccessError={SuccessError} />

      <button
        className="btn btn-danger btn-sm px-3"
        onClick={logoutFun}
      >
        Logout
      </button>
    </>
  );
}

export default Logout;