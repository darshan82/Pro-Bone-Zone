import React, { useContext, useEffect, useRef, useState } from "react";
import Footer from "../../component/Footer";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import Navbar from "../../component/Navbar/navbar";
import { useNavigate, useParams } from "react-router-dom";
import { userTypes } from "../../constants";
import { UserContext } from "../../context/UserContext";

export default function index() {
    document.title = "Profile";
    const {user} = useContext(UserContext)
    const [state, setState] = useState({})
    const [userDetails, setUserDetails] = useState({})
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
        if(user){
            axios.get(`/user/licensee/${user?.id}`).then((res) => {
                setUserDetails(res?.data)
            })

        }
    }, [user])

    useEffect(() => {
        if (userDetails) {
            let { permit,email, phone, pass, notes } = userDetails
            setState({
                ...state,
                email,
                phone,
                pass,
                notes,
                permit,
                name_first: userDetails?.[`name-first`],
                name_last: userDetails?.[`name-last`]
            })
        }
    }, [userDetails])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`/user/licensee/update/${user?.id}`, state).then((res) => {
            if (!res.data.error) {
                Swal({
                    text: "Profile updated successfully.",
                    icon: 'success',
                    timer: 2000,
                })

            }
            else {
                Swal({
                    text: res?.data?.message,
                    icon: 'error',
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
    }



    return (
        <>
            <Navbar />

            {/* A Smart Solution */}
            <div className="bg-white pl-3 pr-5 lg:pr-9 lg:ml-44">
                <div className="max-w-full mb-2 ">
                    <div className="container mx-auto py-4">
                        <h1
                            className=" text-[#2E5FB7]  lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5"
                        >
                            Profile

                        </h1>



                        <div className="box  ">
                            <Formik initialValues={state}  >
                                <Form onSubmit={handleSubmit} >
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="name_first" className="block mb-2">
                                                First Name:
                                            </label>
                                            <div className="mt-1">
                                                <Field
                                                    type="text"
                                                    id="name_first"
                                                    name="name_first"
                                                    value={state.name_first}
                                                    onChange={handleChange}
                                                    autoComplete="given-name"
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="name_last" className="block mb-2">
                                                Last Name:
                                            </label>
                                            <div className="mt-1">
                                                <Field
                                                    type="text"
                                                    id="name_last"
                                                    name="name_last"
                                                    value={state.name_last}
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
                                                    disabled
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
                                            ></Field>
                                        </div>
                                    </div>




                                    <div className="flex justify-center">

                                        <React.Fragment>
                                            <button
                                                type="submit"
                                                className="bg-[#EC672C] mb-4 mr-2 px-5 py-1 rounded-sm text-white"
                                            >
                                                Update
                                            </button>
                                        </React.Fragment>

                                    </div>
                                </Form>
                            </Formik>

                        </div>
                    </div>
                </div>
            </div >

            <Footer />

        </>
    );
}
