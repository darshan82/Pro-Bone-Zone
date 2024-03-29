import React, { useContext, useEffect, useRef, useState } from "react";
import Footer from "../../component/Footer";
import { Formik } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { userTypes } from "../../constants";
import Navbar from "../../component/Navbar/navbar";

export default function index()
{
    const { user } = useContext(UserContext)
    const [state, setState] = useState({})

    useEffect(()=>{
            if(user){
                setState({
                    ...state ,
                    permit:user.permit === "admin" ? userTypes.licensee : userTypes.staff,
                    territoryId:100,
                    licenseeId:user.permit === userTypes.licensee ? user.id : undefined,


                })
            }
        },[user])

    const handleChange = (e) =>
    {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault()

        axios.post(`/user/signup`, state).then((res) =>
        {
            setState({})
            Swal({
                title: state.permit + " " + "Created Successfully",
                icon: 'success',
                timer: 2000,
            })
        }).catch((err) =>
        {
            Swal({
                title: err?.response?.data?.message,
                icon: 'error',
                timer: 2000,
            })
        })
    };

    return (
        <>
            <Navbar />

            <div className="bg-white p-2 pl-3 pr-5 lg:pr-9 lg:ml-44 mb-12">
                <div className="max-w-full mb-10 ">
                    <div className="container mx-auto py-8">
                        <h1
                            className=" text-[#2E5FB7]  lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5"
                        >
                            {"Register"}

                        </h1>

                        <div className="box">
                            <Formik initialValues={state}>

                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap">
                                        {/* <div className="w-full md:w-1/2 px-2 mb-4">
                                        <label htmlFor="permit" className="block mb-2">
                                            Permit:
                                        </label>
                                        <div className="mt-1">
                                            <select
                                                id="permit"
                                                name="permit"
                                                value={state.permit}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                >
                                                <option value="licensee">licensee</option>
                                                <option value="staff">Staff</option>
                                            </select>
                                        </div>
                                    </div> */}

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="firstName" className="block mb-2">
                                                First Name:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="nameFirst"
                                                    value={state.nameFirst}
                                                    onChange={handleChange}
                                                    autoComplete="given-name"
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="lastName" className="block mb-2">
                                                Last Name:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="nameLast"
                                                    value={state.nameLast}
                                                    onChange={handleChange}
                                                    autoComplete="family-name"
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="phone" className="block mb-2">
                                                Phone:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="number"
                                                    id="phone"
                                                    name="phone"
                                                    value={state.phone}
                                                    onChange={handleChange}
                                                    autoComplete="tel"
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="email" className="block mb-2">
                                                Email:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={state.email}
                                                    onChange={handleChange}
                                                    autoComplete="email"
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="password" className="block mb-2">
                                                Password:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="pass"
                                                    value={state.pass}
                                                    onChange={handleChange}
                                                    autoComplete="new-password"
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <label htmlFor="notes" className="block mb-2">
                                            Notes:
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="notes"
                                                name="notes"
                                                value={state.notes}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="bg-[#EC672C] mb-4 mr-2 px-5 py-1 rounded-sm text-white"
                                        >
                                            Sign up
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
