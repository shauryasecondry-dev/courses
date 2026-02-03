import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from "./axios/api.js";
import { useAuth } from "./context/AuthProvider.jsx"
function Logout() {
    let { user, setUser } = useAuth();
    const navigate = useNavigate();
  

    async function logoutFun() {
        try {
            let res = await logout();

            setUser(null);
            navigate("/login");
        }
        catch (error) {
            setErrorSuccess({
                status: error.response?.status || 500,
                message: error.response?.data?.message || "Cannot connect to server"
            })
        }
    }

    return (
        <>
            
            <button 
                className="btn btn-danger btn-sm px-3"
                onClick={logoutFun}
            >
                Logout
            </button>
        </>
    )
}

export default Logout;