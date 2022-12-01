import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import amaricanexpress from "./asset/amarican_express.png"

const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        // localStorage.removeItem('token')
        // localStorage.removeItem('userId')
        // navigate("/")
    }
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-light fixed-top col">
                    <div className="container">
                        <a className="navbar-brand">
                            <img src={amaricanexpress} alt="amaricanexpress" className="logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarText"
                            aria-controls="navbarText"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <input type="text" className="form-control sty d-none d-md-block cash" placeholder='search' />
                                <span className="input-group-text d-none d-md-block"><i className="fa fa-search"></i></span>
                            </ul>
                            <div className="col-12 col-md-8 text-md-end">
                                <Link
                                    to=""
                                    className=' cart stye'
                                >
                                    <span>
                                        <i className="fa fs-5 fa-shopping-basket mx-md-4 mx-3"> Cart </i>
                                    </span>
                                </Link>
                                <Link
                                    to=""
                                    className='cart stye'
                                >
                                    <span>
                                        <i className="fa fs-5 fa-address-card mx-md-4 mx-3"> Admin </i>
                                    </span>
                                </Link>
                                <span>
                                    <i className="fa fs-5 fa-sign-in mx-md-4 mx-3 my-3 my-md-0 stye" onClick={logout}> Log In </i>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar