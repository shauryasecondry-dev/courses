import React from "react";
import NavbarAdmin from "./NavbarAdmin.jsx";
import { useAuth } from "./context/AuthProvider.jsx";
import { Navigate, Link } from "react-router-dom";

function AdminHome() {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <NavbarAdmin />

            <div style={{ marginTop: "18vh", marginBottom: "4vh" }}>
                {/* Hero Section */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6">
                        <h1 className="fw-bold mb-3">Admin Dashboard</h1>
                        <p className="lead text-muted mb-4">
                            Manage your courses efficiently. Add new courses, edit existing ones,
                            or remove outdated content.
                        </p>
                        <Link to="/addcoursedata" className="btn btn-primary btn-lg me-2">
                            Add New Course
                        </Link>
                        <Link to="/admin/owncourse" className="btn btn-outline-secondary btn-lg">
                            Manage Courses
                        </Link>
                    </div>

                    <div className="col-md-6 text-center">
                        <img
                            src="/src/assets/AminCourse.jpg"
                            alt="Admin Dashboard"
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: "400px", objectFit: "cover" }}
                        />
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="row g-3 mb-5">
                    
                    {/* Add */}
                    <div className="col-md-4">
                        <Link to="/addcoursedata" style={{ textDecoration: "none" }}>
                            <div className="card text-white" style={{ backgroundColor: "#212529" }}>
                                <div className="card-body text-center py-4">
                                    <img
                                        src="/src/assets/addImage.png"
                                        alt="Add"
                                        style={{ width: "80px", marginBottom: "15px", filter: "brightness(0) invert(1)" }}
                                    />
                                    <h5 className="card-title">Add Courses</h5>
                                    <p className="card-text small">Create and publish new courses</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Edit */}
                    <div className="col-md-4">
                        <Link to="/admin/owncourse" style={{ textDecoration: "none" }}>
                            <div className="card text-white" style={{ backgroundColor: "#212529" }}>
                                <div className="card-body text-center py-4">
                                    <img
                                        src="/src/assets/editImage.png"
                                        alt="Edit"
                                        style={{ width: "80px", marginBottom: "15px", filter: "brightness(0) invert(1)" }}
                                    />
                                    <h5 className="card-title">Edit Courses</h5>
                                    <p className="card-text small">Update course content and details</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Delete */}
                    <div className="col-md-4">
                        <Link to="/admin/owncourse" style={{ textDecoration: "none" }}>
                            <div className="card text-white" style={{ backgroundColor: "#212529" }}>
                                <div className="card-body text-center py-4">
                                    <img
                                        src="\src\assets\deleteImage.png"
                                        alt="Delete"
                                        style={{ width: "80px", marginBottom: "15px", filter: "brightness(0) invert(1)" }}
                                    />
                                    <h5 className="card-title">Delete Courses</h5>
                                    <p className="card-text small">Remove outdated courses</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AdminHome;
