import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { baseUrl } from "./endpoint";

const Registration = () => {
    const navigate = useNavigate();
    const [Error, setError] = useState("");
    const [first, setfirst] = useState(true)

    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);

    const login = () => {
        setfirst(prev => true)
    }

    const register = () => {
        setfirst(prev => false)
    }

    const signup = useFormik({
        initialValues: {
            firstname: "",
            Lastname: "",
            email: "",
            password: "",
            gender: "",
        },
        onSubmit: (values) => {
            axios.post(`${baseUrl}signup`, values).then((credentials) => {
                if (credentials) {
                    let Err = credentials.data.message;
                    if (Err == "Email already used") {
                        setError("Email already used");
                    } else {
                        setfirst(prev => true)
                    }
                }
            })
        },
        validationSchema: yup.object({
            firstname: yup
                .string()
                .required("This field is required")
                .min(4, "must be greater than three"),
            Lastname: yup
                .string()
                .required("This field is required")
                .min(3, "must be greater than two"),
            email: yup
                .string()
                .required("This field is required")
                .email("must be a valid email"),
            gender: yup.string().required("This field is required"),
            password: yup
                .string()
                .required("This field is required")
                .matches(lower, "Must include lowerCase letter")
                .matches(upper, "Must include upperCase letter")
                .matches(number, "Must include a number")
                .min(5, "must be greater than 5 charaters"),
        }),
    });
    const signin = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            axios.post(`${baseUrl}signin`, values).then((credentials) => {
                if (credentials) {
                    let Err = credentials.data.message;
                    if (Err == "Email not found") {
                        setError("Email not found");
                    } else if (Err == "Invaild password") {
                        setError("Invaild password");
                    } else {
                        if (Err == "Token generated") {
                            localStorage.token = credentials.data.token
                            navigate("/Dashboard")
                        }
                    }
                }
            })
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .required("This field is required")
                .email("must be a valid email"),
            password: yup
                .string()
                .required("This field is required")
                .matches(lower, "Must include lowerCase letter")
                .matches(upper, "Must include upperCase letter")
                .matches(number, "Must include a number")
                .min(5, "password is weak, must be greater than 5 charaters"),
        }),
    });

    const toggle = useRef();
    const i = useRef();
    const password = useRef();

    const showHide = () => {
        if (password.current.type === "password") {
            password.current.setAttribute("type", "text");
            toggle.current.classList.add("hide");
            i.current.classList = "fa fa-eye-slash";
        } else {
            password.current.setAttribute("type", "password");
            i.current.classList = "fa fa-eye";
            toggle.current.classList.remove("hide");
        }
    };
    return (
        <>
            <div className="container">
                <div className="row mx-auto my-5">
                    {first && (
                        <div className="shadow col-12 col-md-4 mx-auto px-4 pb-3 asd">
                            <h3 className="m-4">
                                <b>
                                    <i>SIGN-IN</i>
                                </b>
                            </h3>
                            <p>
                                <b className="text-danger">{Error}</b>
                            </p>
                            <form action="" onSubmit={signin.handleSubmit}>
                                <input type="email" placeholder="Your email" className={signin.errors.email && signin.touched.email ? "asde is-invalid" : "asde my-2"} onChange={signin.handleChange} name="email" onBlur={signin.handleBlur} />
                                {signin.touched.email && (
                                    <div style={{ color: "red" }} className="my-1">
                                        {signin.errors.email}
                                    </div>
                                )}
                                <input type="password" placeholder="Your password" ref={password} maxLength={10} className={signin.errors.password && signin.touched.password ? "asde is-invalid" : "asde my-2"} onChange={signin.handleChange} name="password" onBlur={signin.handleBlur} />
                                <div
                                    id="toggle"
                                    ref={toggle}
                                    onClick={showHide}
                                    className="gose pe-4"
                                >
                                    <i ref={i} className="fa fa-eye" aria-hidden="true"></i>
                                </div>
                                {signin.touched.password && (
                                    <div style={{ color: "red" }} className="my-1">
                                        {signin.errors.password}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    className="btn form-control py-3 mt-2 asd"
                                >
                                    Sign-In
                                </button>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-8">
                                                <p style={{ opacity: "0.6" }}>Don't have an account?</p>
                                            </div>
                                            <div className="col-4">
                                                <p>
                                                    <b className="sig" onClick={register}>
                                                        Sign-Up
                                                    </b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                    {!first && (
                        <div className="shadow col-12 col-md-4 mx-auto px-4 asd">
                            <h3 className="m-4">
                                <b>
                                    <i>Create an account</i>
                                </b>
                            </h3>
                            <p>
                                <b className="text-danger">{Error}</b>
                            </p>
                            <form action="" onSubmit={signup.handleSubmit}>
                                <input type="text" placeholder="Your firstname" className={signup.errors.firstname && signup.touched.firstname ? "asde is-invalid" : "asde my-2"} onChange={signup.handleChange} name="firstname" onBlur={signup.handleBlur} />
                                {signup.touched.firstname && (
                                    <div style={{ color: "red" }} className="my-1">
                                        {signup.errors.firstname}
                                    </div>
                                )}
                                <input type="text" placeholder="Your Lastname" className={signup.errors.Lastname && signup.touched.Lastname ? "asde is-invalid" : "asde my-2"} onChange={signup.handleChange} name="Lastname" onBlur={signup.handleBlur} />
                                {signup.touched.Lastname && (
                                    <div style={{ color: "red" }} className="my-1">
                                        {signup.errors.Lastname}
                                    </div>
                                )}
                                <input type="email" placeholder="Your email" className={signup.errors.email && signup.touched.email ? "asde is-invalid" : "asde my-2"} onChange={signup.handleChange} name="email" onBlur={signup.handleBlur} />
                                {signup.touched.email && (
                                    <div style={{ color: "red" }} className="my-1">
                                        {signup.errors.email}
                                    </div>
                                )}
                                <select className={signup.errors.gender && signup.touched.gender ? "asde is-invalid" : "asde my-2"} onChange={signup.handleChange} name="gender" onBlur={signup.handleBlur}>
                                    <option>Your gender</option>
                                    <option value="MALE">MALE</option>
                                    <option value="FEMALE">FEMALE</option>
                                </select>
                                {signup.touched.gender && (
                                    <div style={{ color: "red" }} className="my-1">
                                        {signup.errors.gender}
                                    </div>
                                )}
                                <input type="password" placeholder="Your password" ref={password} maxLength={10} className={signup.errors.password && signup.touched.password ? "asde is-invalid" : "asde my-2"} onChange={signup.handleChange} name="password" onBlur={signup.handleBlur} />
                                <div
                                    id="toggle"
                                    ref={toggle}
                                    onClick={showHide}
                                    className="gose pe-4"
                                >
                                    <i ref={i} className="fa fa-eye" aria-hidden="true"></i>
                                </div>
                                {signup.touched.password && (
                                    <div style={{ color: "red" }} className="my-1">
                                        {signup.errors.password}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    className="btn form-control py-3 mt-2 asd"
                                >
                                    Sign-Up
                                </button>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-8">
                                                <p style={{ opacity: "0.6" }}>Already have an account?</p>
                                            </div>
                                            <div className="col-4">
                                                <p>
                                                    <b className="sig" onClick={login}>
                                                        Sign-In
                                                    </b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Registration