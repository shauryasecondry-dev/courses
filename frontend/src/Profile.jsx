import {useAuth} from "./context/AuthProvider.jsx"
import React,{useState,useEffect} from 'react'
import { data } from "./axios/api.js";
import NavbarAdmin from "./NavbarAdmin.jsx"
import {Navigate} from 'react-router-dom'
import {purchaseData } from "./axios/api.js"
function Profile(){
    let [details,setDetails]=useState([])
    let [purchases,setPurchases]=useState([])
    let {user,setUser}=useAuth()
        if(!user){
        return <Navigate to="/login"/>
    }
    async function purchase(){
        let res=await purchaseData();
       setPurchases(res.data)
    }
    async function getData(){
        let res=await data();
       
        let arr=res.data;
        setDetails(arr.filter((ele)=>ele.user.email==user.email)
    )
    }
    
    useEffect(()=>{
        getData();
    },[])
    useEffect(()=>{
        purchase();
    },[])
    

    
    return(
        <>
        <NavbarAdmin/>
        <div className="container mt-5">
            <div className="card shadow-lg" style={{
                width:"40vw",
                minWidth:"350px",
                maxHeight:"70vh",
                margin: '0 auto', 
                borderRadius: '15px',
                marginTop:"10vh",
                overflowY:"auto"
            }}>
                <div className="card-body p-4">
                    <div className="text-center mb-4">
                        <div style={{
                            width: '90px',
                            height: '90px',
                            borderRadius: '50%',
                            background: '#f8f9fa',
                            border: '3px solid #dee2e6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2.5rem',
                            margin: '0 auto 1.5rem',
                            color: '#000'
                        }}>
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <h3 className="mb-2 fw-bold">{user.username}</h3>
                        <p className="text-secondary mb-0">
                            <i className="fas fa-envelope me-2" style={{color: '#000'}}></i>
                            {user.email}
                        </p>
                    </div>
                    
                    <div className="bg-light p-3 rounded mb-4 text-center">
                        <h5 className="mb-0">
                            <i className="fas fa-tasks me-2" style={{color: '#000'}}></i>
                            Total Contributions: 
                            <span className="badge bg-dark ms-2" style={{fontSize: '1rem'}}>{details.length}</span>
                        </h5>
                    </div>
                              
                                        <div className="bg-light p-3 rounded mb-4 text-center">
                        <h5 className="mb-0">
                            <i className="fas fa-tasks me-2" style={{color: '#000'}}></i>
                            Total Purchases: 
                            <span className="badge bg-dark ms-2" style={{fontSize: '1rem'}}>{purchases.length}</span>
                        </h5>
                    </div>
                    <div>
                        <h5 className="mb-3 fw-bold">
                            <i className="fas fa-clipboard-list me-2" style={{color: '#000'}}></i>
                            Your Work
                        </h5>
                        {details.length > 0 ? (
                            <ul className="list-group">
                                {details.map((ele, index) => (
                                    <li key={index} className="list-group-item border-start border-4 border-dark mb-2" style={{borderRadius: '8px'}}>
                                        <i className="fas fa-chevron-right me-2" style={{color: '#000', fontSize: '0.8rem'}}></i>
                                        <strong>{ele.title}</strong>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-muted text-center py-3">
                                <i className="fas fa-inbox me-2" style={{color: '#000'}}></i>
                                No contributions yet
                            </p>
                            
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;