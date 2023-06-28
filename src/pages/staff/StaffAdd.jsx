import React, { useContext, useEffect, useRef, useState } from "react";
import Footer from "../../component/Footer";
import { Field, Formik } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import { userTypes } from "../../constants";
import Navbar from "../../component/Navbar/navbar";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";
export default function index() {
    const {user} = useContext(UserContext)
    document.title = "Add staff"
    const navigation = useNavigate()
    const [state, setState] = useState({ permit: userTypes.staff })



    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(user){
            
            setState({
                ...state,
                licenseeId:user.id,
                territoryId:user?.territory?.id
            })
        }
    },[user])

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`/user/signup` , state).then((res) => {
            Swal({
                title: "Staff Created Successfully",
                icon: 'success',
                timer: 2000,
            })
            navigation("/staff")
        }).catch((err) => {
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
                            {"Add Staff"}

                        </h1>

                        <div className="box">
                            <Formik initialValues={state}>

                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="nameFirst" className="block mb-2">
                                                First Name:
                                            </label>
                                            <div className="mt-1">
                                                <Field
                                                    type="text"
                                                    id="nameFirst"
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
                                            <label htmlFor="nameLast" className="block mb-2">
                                                Last Name:
                                            </label>
                                            <div className="mt-1">
                                                <Field
                                                    type="text"
                                                    id="nameLast"
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
                                                <Field
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
                                                <Field
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
                                                <Field
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
                                    <div className="w-full  px-2 mb-4">
                                        <label htmlFor="notes" className="block mb-2">
                                            Notes:
                                        </label>
                                        <div className="mt-1">
                                            <Field
                                                as="textarea"
                                                rows={4}
                                                id="notes"
                                                name="notes"
                                                value={state.notes}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="bg-[#EC672C] mb-4 mr-2 px-5 py-1 rounded-sm text-white"
                                        >
                                            Add
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
