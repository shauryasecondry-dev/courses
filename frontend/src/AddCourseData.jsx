import React, { useState } from 'react'
import { addCourse } from "./axios/api.js";
import Error from "./Error.jsx"
import { useAuth } from "./context/AuthProvider.jsx"
import { Navigate } from 'react-router-dom'
import Navbar from './Navbar.jsx'

function AddCourseData() {
    let { user, setUser } = useAuth();
    
    if (!user) {
        return <Navigate to="/login" />;
    }

    let [errorSuccess, setErrorSuccess] = useState({
        status: null,
        message: ""
    })

    let [inp, setInp] = useState({
        title: "",
        description: "",
        price: ""
    })

    let [image, setImage] = useState(null);

    function handelText(event) {
        setInp((ele) => {
            return {
                ...ele,
                [event.target.name]: event.target.value
            }
        })
    }

    function handelImage(event) {
        setImage(event.target.files[0])
    }

    async function handelSubmit(event) {
        event.preventDefault();
        try {
            let formData = new FormData();
            formData.append("title", inp.title);
            formData.append("description", inp.description)
            formData.append("price", inp.price)
            formData.append("image", image)

            let res = await addCourse(formData)
            setErrorSuccess({
                status: res.status,
                message: res.data.message
            })
        }
        catch (error) {
            setErrorSuccess({
                status: error.response?.status || 500,
                message: error.response?.data?.message || "Error occurred"
            })
        }
    }

    return (
        <>
            <Navbar />

            <div className="container">
                <div className="row justify-content-center" style={{ marginTop: "18vh",  }}>
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h4 className="text-center mb-4 fw-bold">
                                    <i className="bi bi-plus-circle me-2"></i>
                                    Add New Course
                                </h4>

                                <Error SuccessError={errorSuccess} />

                                <form onSubmit={handelSubmit}>
                                    {/* Title */}
                                    <div className="mb-3">
                                        <label className="form-label">
                                            <i className="bi bi-book me-2"></i>
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={inp.title}
                                            onChange={handelText}
                                            className="form-control"
                                            placeholder="Enter course title"
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="mb-3">
                                        <label className="form-label">
                                            <i className="bi bi-text-paragraph me-2"></i>
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            value={inp.description}
                                            onChange={handelText}
                                            className="form-control"
                                            rows="4"
                                            placeholder="Enter course description"
                                        />
                                    </div>

                                    {/* Price */}
                                    <div className="mb-3">
                                        <label className="form-label">
                                            <i className="bi bi-currency-dollar me-2"></i>
                                            Price
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i class="fas fa-rupee-sign"></i></span>
                                            <input
                                                type="text"
                                                name="price"
                                                value={inp.price}
                                                onChange={handelText}
                                                className="form-control"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="mb-3">
                                        <label className="form-label">
                                            <i className="bi bi-image me-2"></i>
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            name="image"
                                            onChange={handelImage}
                                            className="form-control"
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">
                                        <i className="bi bi-check-circle me-2"></i>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCourseData;