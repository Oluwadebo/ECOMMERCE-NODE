import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from "./endpoint";
import Navbar from './Navbar'

const Admin = () => {
    const navigate = useNavigate();
    const [user, setuser] = useState([])
    const [userId, setuserId] = useState('')
    // const token = localStorage.token;

    useEffect(() => {
        // if (token) {
        //     axios.get(`${baseUrl}dashboard`,
        //         {
        //             headers: {
        //                 "Authorization": `Bearer ${token}`,
        //                 "Content-type": "application/json",
        //                 "Accept": "application/json"
        //             }
        //         }).then((data) => {
        //             if (data) {
        //                 let Err = data.data.message;
        //                 if (Err == "Valid Token") {
        //                     setuser(data.data.result[0]);
        //                     localStorage.userId = data.data.result[0]._id
        //                     setuserId(data.data.result[0]._id)
        //                 } else {
        //                     localStorage.removeItem('token')
        //                     localStorage.removeItem('userId')
        //                     navigate("/")
        //                 }
        //             }
        //         })
        // } else {
        //     navigate("/")
        // }
    }, [])

    return (
        <>
            <Navbar />
            <div className="container-fluid mt-5 pt-4 mb-4">
                <h4 className='pt-1'>
                    Welcome <span className="naem">{user.firstname}</span>
                </h4>
                <div className="container p-0 m-o mt-3">
                    <div className="row">
                        <div className="col-12 col-md-4 vd">

                        </div>
                        <div className="col-12 col-md-8 vd">ssfsdsssss</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin