import React, {useContext, useEffect, useRef, useState } from "react";
import ArrowRight from "../../assets/ArrowRight.png";
import Footer from "../../component/Footer";
import { useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';
import { EventContext } from "../../context/EventContext";
import axios from "axios";

export default function index()
{
    const event = useContext(EventContext)
    const { pathname } = useLocation();
    document.title = "Appointment";

    const [state , setState] =useState({})

    const handleChange = ()=>{
        // manage state
    }
    const handleSubmit = (values) =>
    {
        // Handle form submission
    };

    useEffect(()=>{
        axios.get("sponsor/100").then((res)=>{
            console.log(res.data,"...........")
        })
    },[])



    useEffect(()=>{
            console.log(event,'................')    
    },[event])

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
                            Appointment

                        </h1>



                        <div className="box  ">
                            <Formik initialValues={state} onSubmit={handleSubmit}>
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
                                                onChange= {handleChange}
                                                value={state.name}
                                            />
                                            <ErrorMessage name="name" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="name" className="block mb-2">
                                                Interest:
                                            </label>
                                            <Field
                                                type="text"
                                                id="interest"
                                                name="interest"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                onChange= {handleChange}
                                                required
                                            />
                                            <ErrorMessage name="interest" component="div" className="text-red-500" />
                                        </div>  <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="name" className="block mb-2">
                                                Time:
                                            </label>
                                            <Field
                                                type="text"
                                                id="timeslot"
                                                name="timeslot"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange= {handleChange}
                                            />
                                            <ErrorMessage name="timeslot" component="div" className="text-red-500" />
                                        </div>  <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="name" className="block mb-2">
                                                Consultant:
                                            </label>
                                            <Field
                                                type="text"
                                                id="consultant"
                                                name="consultant"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange= {handleChange}
                                            />
                                            <ErrorMessage name="consultant" component="div" className="text-red-500" />
                                        </div>  <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="name" className="block mb-2">
                                                Company:
                                            </label>
                                            <Field
                                                type="text"
                                                id="companyId"
                                                name="companyId"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange= {handleChange}
                                            />
                                            <ErrorMessage name="company" component="div" className="text-red-500" />
                                        </div>  <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="name" className="block mb-2">
                                                Status:
                                            </label>
                                            <Field
                                                type="text"
                                                id="status"
                                                name="status"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange= {handleChange}
                                            />
                                            <ErrorMessage name="status" component="div" className="text-red-500" />
                                        </div>  <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="name" className="block mb-2">
                                                Advance:
                                            </label>
                                            <Field
                                                type="text"
                                                id="advance"
                                                name="advance"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange= {handleChange}
                                            />
                                            <ErrorMessage name="advance" component="div" className="text-red-500" />
                                        </div>  <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="name" className="block mb-2">
                                                Rating:
                                            </label>
                                            <Field
                                                type="text"
                                                id="rating"
                                                name="rating"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange= {handleChange}
                                            />
                                            <ErrorMessage name="rating" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="email" className="block mb-2">
                                                Feedback:
                                            </label>
                                            <Field
                                                type="text"
                                                id="feedback"
                                                name="feedback"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="feedback" component="div" className="text-red-500" />
                                        </div>

                                        

                                        <div className="w-full px-2 mb-4">
                                            <label htmlFor="description" className="block mb-2">
                                                Staff notes:
                                            </label>
                                            <Field
                                                as="textarea"
                                                id="notes"
                                                name="notes"
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
                                                Update
                                            </button>
                                            <button
                                                onClick={() =>
                                                {
                                                    Swal({
                                                        text: 'to remove this record?',
                                                        icon: 'success',
                                                        timer:2000
                                                        // showCancelButton: true,
                                                        // confirmButtonColor: 'red',
                                                        // confirmButtonText: 'Delete',
                                                        // cancelButtonText: 'Cancel'
                                                    })
                                                }}
                                                className="bg-[#EC672C] mb-4 ml-2 px-5 py-1 rounded-sm text-white"
                                            >
                                                Delete
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
