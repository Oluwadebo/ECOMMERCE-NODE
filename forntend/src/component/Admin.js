import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from "./endpoint";
import Navbar from './Navbar';
import footballboots from "./asset/football_boots_198704.jpg"
import Upload from './Upload';
import Footer from './Footer';

const Admin = () => {
    const navigate = useNavigate();
    const [user, setuser] = useState([])
    const [userId, setuserId] = useState('')
    const [pageloader, setpageloader] = useState(true)
    // const token = localStorage.token;

    useEffect(() => {
        setpageloader(prev => false)
        // const yes = prompt("Are you an Admin");
        // if (yes == "yes" || yes == "YES" || yes == "Yes") {
        //     navigate("/Admin")
        //     setpageloader(prev => false)
        // } else {
        //     navigate("/")
        // }
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
            {pageloader && (
                <div className="spine">
                    <div className="pageloader"></div>
                </div>
            )}
            {!pageloader && (
                <div className="">
                    <Navbar />
                    <div className="container-fluid mt-5 pt-4 mb-4">
                        <h4 className='pt-1'>
                            Welcome <span className="naem">{user.firstname}</span>
                        </h4>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <Upload />
                                </div>
                                <div className="col-md-8">
                                    <div className="title-box">
                                        <h2>Products</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-top">
                                                <div className="imgBx">
                                                    <img src={footballboots} className="h-100" />
                                                    <div className="overlay-right">
                                                        <button type="button" className="btn btn-secondary" title="Quick Shop">
                                                            <i className="fa fa-eye"></i>
                                                        </button>
                                                        <button type="button" className="btn btn-secondary" title="Add to wish list">
                                                            <i className="fa fa-heart"></i>
                                                        </button>
                                                        <button type="button" className="btn btn-secondary" title="Add to Cart">
                                                            <i className="fa fa-shopping-cart"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product-botttom text-center mt-2">
                                                    <h3>Men's Soccer Boot</h3>
                                                    <h5>$40.00</h5>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </>
    )
}

export default Admin