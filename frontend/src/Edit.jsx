import React,{useState} from 'react'
import {edit} from "./axios/api.js"
import { useParams } from "react-router-dom";
import Error from "./Error.jsx"
import NavbarAdmin from "./NavbarAdmin.jsx"

function Edit(){
  let [errorSuccess,setErrorSuccess] = useState({
    status:null,
    message:""
  })

  const { id } = useParams();

  let [inp,setInp] = useState({
    title:"",
    description:"",
    price:"",
  });

  let [image,setImage] = useState(null);

  function handelText(event){
    setInp(ele => ({ ...ele, [event.target.name]: event.target.value }))
  }

  function handelImage(event){
    setImage(event.target.files[0]);
  }

  async function handelSubmit(event){
    event.preventDefault();
    try{
      let formdata = new FormData();
      formdata.append("title", inp.title);
      formdata.append("description", inp.description);
      formdata.append("price", inp.price);
      formdata.append("image", image);

      let res = await edit(id, formdata);
      setErrorSuccess({
        status: res.status,
        message: res.data.message
      })
    }
    catch(error){
      setErrorSuccess({
        status: error.response?.status || 500,
        message: error.response?.data?.message || "Error occurred"
      })
    }
  }

  return (
    <>
      <NavbarAdmin />

      {/* spacing because navbar is fixed */}
      <div style={{ marginTop: "80px" }} />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="card shadow p-4" style={{ width: "90vw", maxWidth: "500px" }}>
          
          <h3 className="text-center mb-4">Edit Course</h3>

          <Error SuccessError={errorSuccess} />

          <form onSubmit={handelSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={inp.title}
                onChange={handelText}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={inp.description}
                onChange={handelText}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={inp.price}
                onChange={handelText}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                type="file"
                className="form-control"
                onChange={handelImage}
              />
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Update Course
            </button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Edit;
