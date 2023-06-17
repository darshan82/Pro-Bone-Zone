import React, {  useEffect, useState } from "react";
import Footer from "../../component/Footer";
import { Formik } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom"
import {  setDefaultPath} from "../../constants";
document.title = "Login"
export default function index() {
    const history = useNavigate()
    const { login } = useContext(UserContext)
    const [state, setState] = useState({})
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("user/login", state).then((res) => {
            if (res.data.token && res.data.user) {
                const token = res?.data?.token
                const user = res?.data?.user
                login(user, token)
                history(setDefaultPath(user))
                setState({})
                Swal({
                    text: "succeffuly Logged in",
                    icon: 'success',
                    timer: 2000,
                })
                
            }
        }).catch((err) => {
            Swal({
                title: err.response?.data?.message,
                icon: 'error',
                timer: 4000,

            })
        })
    };
    return (
        <>
            <div className="bg-white p-2 pl-3 pr-5 lg:pr-9 lg:ml-44 mb-12">
                <div className="max-w-full mb-10 ">
                    <div className="container mx-auto py-8">

                        <h1
                            className=" text-[#2E5FB7]  lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5"
                        >
                            {"Login"}

                        </h1>
                        <div className="box">
                            <Formik initialValues={state.values}>

                                <form onSubmit={handleSubmit} >
                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <label className="block mb-2" htmlFor="email">
                                            Email:
                                        </label>
                                        <input
                                            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={state.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2 mb-4">

                                        <label className="block mb-2" htmlFor="password">

                                            Password:
                                        </label>
                                        <input
                                            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                            id="password"
                                            type="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            value={state.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button
                                            className="bg-[#EC672C] mb-4 mr-2 px-5 py-1 rounded-sm text-white"
                                            type="submit"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
