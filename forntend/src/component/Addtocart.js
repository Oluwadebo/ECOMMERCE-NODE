import React from 'react'
import { useEffect, useState } from "react";
import Footer from './Footer'
import axios from 'axios';
import { baseUrl } from "./endpoint";
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import footballboots from "./asset/football_boots_198704.jpg"
import footballboot8 from "./asset/football_boots_198708.jpg"

const Addtocart = () => {
    const customer = localStorage.customer;
    const customerId = localStorage.customerId;
    const navigate = useNavigate();
    const [customers, setcustomers] = useState([])
    useEffect(() => {
        if (customer) {
            axios.get(`${baseUrl}dashboard`,
                {
                    headers: {
                        "Authorization": `Bearer ${customer}`,
                        "Content-type": "application/json",
                        "Accept": "application/json"
                    }
                }).then((data) => {
                    if (data) {
                        let Err = data.data.message;
                        if (Err == "Valid Token") {
                            console.log(customerId);
                            axios.post(`${baseUrl}getaddtocart`, { id: customerId }).then((data) => {
                                if (data) {
                                    // setfiles(data.data.result);
                                    console.log(data.data.result);
                                    // setpageloader(prev => false)
                                }
                            })
                        } else {
                            localStorage.removeItem('customer')
                            localStorage.removeItem('customerId')
                            navigate("/Registration")
                        }
                    }
                })
        } else {
            navigate("/Registration")
        }

    }, [])

    return (
        <>
            <Navbar />
            <div className="container-fluid mt-5 pt-1 mb-4 p-0 m-0">
                <div className="">
                    <section className="new-product">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={footballboots} className="h-100" />
                                        </div>
                                        <div className="product-botttom text-center">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half"></i>
                                            <h3>Men's Soccer Boot</h3>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={footballboot8} className="h-100" />
                                        </div>
                                        <div className="product-botttom text-center">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half"></i>
                                            <h3>Men's Soccer Boot</h3>
                                            <h5>$70.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Addtocart