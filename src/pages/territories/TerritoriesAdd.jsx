import React, { useEffect, useRef, useState } from "react";
import ArrowRight from "../../assets/ArrowRight.png";
import Footer from "../../component/Footer";
import { useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';

export default function index()
{
    const { pathname } = useLocation();
    const title = pathname.replace("/" , "").charAt(0).toUpperCase() + pathname.slice(2)
    document.title = "Add"+" "+title;

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        description: ''
    };

    const handleSubmit = (values) =>
    {
        // Handle form submission
        console.log(values);
    };

    return (
        <>
            <div className="bg-[#EAEFF8] pt-2 pb-5">
                {/* <Navbar /> */}
                {/* Hero Section */}

                <div className="flex flex-col  ml-10  md:ml-20 lg:ml-44  sm:ml-10 sm:justify-center md: items-start justify-center ">

                </div>
            </div>

            {/* A Smart Solution */}
            <div className="bg-white p-2 pl-3 pr-5 lg:pr-9 lg:ml-44 mb-12">
                <div className="max-w-full mb-10 ">
                    <div className="container mx-auto py-8">
                        <h1
                            className=" text-[#2E5FB7]  lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5"
                        >
                        {title}

                        </h1>



                        <div className="box">
                            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                                <Form>
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="name" className="block mb-2">
                                                Name:
                                            </label>
                                            <Field
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            />
                                            <ErrorMessage name="name" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="email" className="block mb-2">
                                                Email:
                                            </label>
                                            <Field
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            />
                                            <ErrorMessage name="email" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="phone" className="block mb-2">
                                                Phone:
                                            </label>
                                            <Field
                                                type="number"
                                                id="phone"
                                                name="phone"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            />
                                            <ErrorMessage name="phone" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full px-2 mb-4">
                                            <label htmlFor="description" className="block mb-2">
                                                Description:
                                            </label>
                                            <Field
                                                as="textarea"
                                                id="description"
                                                name="description"
                                                rows="4"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            />
                                            <ErrorMessage name="description" component="div" className="text-red-500" />
                                        </div>
                                    </div>


                            <div className="flex justify-center">

                                
                                        <React.Fragment>
                                            <button
                                                type="submit"
                                                className="bg-[#EC672C] mb-4 mr-2 px-5 py-1 rounded-sm text-white"
                                            >
                                                Add
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
