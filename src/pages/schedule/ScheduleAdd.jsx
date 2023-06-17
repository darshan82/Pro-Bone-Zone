import React, { useEffect, useRef, useState } from "react";
import ArrowRight from "../../assets/ArrowRight.png";
import Footer from "../../component/Footer";
import { useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';
import Navbar from "../../component/Navbar/navbar";

export default function index()
{
    const { pathname } = useLocation();
    const title = pathname.replace("/" , "").charAt(0).toUpperCase() + pathname.slice(2)
    document.title = "Add"+" "+title;
    const [state , setState] = useState({})

    const handleSubmit = (values) =>
    {
        // Handle form submission
    };

    const handleChange = (e)=>{
            setState({...state, [e.target.name]:e.target.value})
    }

    return (
        <>
            <Navbar />

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
                            <Formik initialValues={state} onSubmit={handleSubmit}>
                                <Form>
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="eventId" className="block mb-2">
                                                Event Id:
                                            </label>
                                            <Field
                                                id="eventId"
                                                name="eventId"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                                
                                            />
                                            <ErrorMessage name="name" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="customerId" className="block mb-2">
                                                Customer Id:
                                            </label>
                                            <Field
                                                id="customerId"
                                                name="customerId"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="email" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="timeslot" className="block mb-2">
                                                Time Slot:
                                            </label>
                                            <Field
                                                id="timeslot"
                                                name="timeslot"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="timeslot" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="interest" className="block mb-2">
                                                Interest:
                                            </label>
                                            <Field
                                                id="interest"
                                                name="interest"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="interest" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="companyId" className="block mb-2">
                                                Company Id:
                                            </label>
                                            <Field
                                                id="companyId"
                                                name="companyId"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="description" component="div" className="text-red-500" />
                                        </div>
                                        
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="consultant" className="block mb-2">
                                            Consultant:
                                            </label>
                                            <Field
                                                id="consultant"
                                                name="consultant"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="consultant" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="rating" className="block mb-2">
                                            rating:
                                            </label>
                                            <Field
                                                id="rating"
                                                name="rating"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="rating" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="feedback" className="block mb-2">
                                            feedback:
                                            </label>
                                            <Field
                                                id="feedback"
                                                name="feedback"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="feedback" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="advance" className="block mb-2">
                                            Advance:
                                            </label>
                                            <Field
                                                id="advance"
                                                name="advance"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="advance" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="editId" className="block mb-2">
                                            Edit Id:
                                            </label>
                                            <Field
                                                
                                                id="editId"
                                                name="editId"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="editId" component="div" className="text-red-500" />
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
