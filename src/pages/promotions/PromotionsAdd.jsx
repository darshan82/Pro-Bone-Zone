import React, { useContext, useEffect, useRef, useState } from "react";
import Footer from "../../component/Footer";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import Navbar from "../../component/Navbar/navbar";
import { PromotionTypes } from "../../constants";

export default function index()
{
    document.title = "Add Territory";
    const [state, setState] = useState({country:"USA" , editId:2})
    const [stateOptions , setStateOptions] = useState([])
    const [licensee , setLicensee] = useState([])
    const handleChange = (e) =>
    {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const getStates = ()=>{
        axios.get(`/global/states`).then((res)=>{
            setStateOptions(res?.data)
        })
    }

    const getLicensees = ()=>{
        axios.get(`/user/licensee`).then((res)=>{
            setLicensee(res?.data)
        })
    }
    useEffect(()=>{
            getStates()
            getLicensees()
        
    },[])
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        axios.post(`/territory/add`, state).then((res) =>
        {
            if (!res.data.error)
            {
                setState({})
                Swal({
                    text: "Territory added successfully.",
                    icon: 'success',
                    timer: 2000,
                })
                history.go(-1)

            }
            else
            {
                Swal({
                    text: res?.data?.message,
                    icon: 'error',
                    timer: 2000,
                })
            }

        }).catch((err) =>
        {
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
                          Add Territory

                        </h1>



                        <div className="box  ">
                            <Formik initialValues={state} onSubmit={handleSubmit} >
                                <Form onSubmit={handleSubmit} >
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="country" className="block mb-2">
                                            Territory:
                                            </label>
                                            <Field
                                                type="text"
                                                id="country"
                                                name="country"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                                value={state.country}
                                                disabled={true}
                                            />
                                            <ErrorMessage name="country" component="div" className="text-red-500" />
                                        </div>
                                        
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="ptype" className="block mb-2">
                                            Promotion Type:
                                            </label>
                                            <select
                                                id="ptype"
                                                name="ptype"
                                                value={state.ptype}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={null} disabled>{"Select State"}</option>

                                                {PromotionTypes && PromotionTypes.length !== 0 &&
                                                    PromotionTypes?.map((option) => (

                                                        <option value={option.value}>{option.label}</option>
                                                    ))
                                                }

                                            </select>
                                            <ErrorMessage name="ptype" component="div" className="text-red-500" />
                                        </div>
                                       

                                        
                                    </div>

                                    <div className="flex justify-center">

                                        <React.Fragment>
                                            <button
                                                type="submit"
                                                className="bg-[#EC672C] mb-4 mr-2 px-5 py-1 rounded-sm text-white"
                                            >
                                               ADD
                                            </button>

                                        </React.Fragment>

                                    </div>
                                </Form>
                            </Formik>

                        </div>
                    </div>


                    <div className="max-w-full mb-2 ">
                    <div className="container mx-auto py-4">
                        <h1
                            className=" text-[#2E5FB7]  lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5"
                        >
                          Events in Promotion

                        </h1>



                        <div className="box  ">
                            <Formik initialValues={state} onSubmit={handleSubmit} >
                                <Form onSubmit={handleSubmit} >
                                    <div className="flex flex-wrap">
                                    
                                           
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="licenseeId" className="block mb-2">
                                            Date:
                                            </label>
                                            <select
                                                id="licenseeId"
                                                name="licenseeId"
                                                value={state.licenseeId || "Select Rating"}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={null} disabled>{"Select Licensee"}</option>

                                                {licensee && licensee.length !== 0 &&
                                                    licensee?.map((option) => (

                                                        <option value={option?.id}>{option?.[`name-first`] + " "+ option?.[`name-last`]}</option>
                                                    ))
                                                }

                                            </select>
                                            <ErrorMessage name="rating" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="licenseeId" className="block mb-2">
                                            Time:
                                            </label>
                                            <select
                                                id="licenseeId"
                                                name="licenseeId"
                                                value={state.licenseeId || "Select Rating"}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={null} disabled>{"Select Licensee"}</option>

                                                {licensee && licensee.length !== 0 &&
                                                    licensee?.map((option) => (

                                                        <option value={option?.id}>{option?.[`name-first`] + " "+ option?.[`name-last`]}</option>
                                                    ))
                                                }

                                            </select>
                                            <ErrorMessage name="rating" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="licenseeId" className="block mb-2">
                                            City:
                                            </label>
                                            <select
                                                id="licenseeId"
                                                name="licenseeId"
                                                value={state.licenseeId || "Select Rating"}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={null} disabled>{"Select Licensee"}</option>

                                                {licensee && licensee.length !== 0 &&
                                                    licensee?.map((option) => (

                                                        <option value={option?.id}>{option?.[`name-first`] + " "+ option?.[`name-last`]}</option>
                                                    ))
                                                }

                                            </select>
                                            <ErrorMessage name="rating" component="div" className="text-red-500" />
                                        </div>


                                        
                                    </div>

                                    <div className="flex justify-center">

                                        <React.Fragment>
                                            <button
                                                type="submit"
                                                className="bg-[#EC672C] mb-4 mr-2 px-5 py-1 rounded-sm text-white"
                                            >
                                               ADD
                                            </button>

                                        </React.Fragment>

                                    </div>
                                </Form>
                            </Formik>

                        </div>
                    </div>
                </div>
                
                </div>
                
            </div >

            <Footer />

        </>
    );
}
