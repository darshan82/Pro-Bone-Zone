import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import Navbar from "../../component/Navbar/navbar";
import { resourceCategory, resourceViewers } from "../../constants";
import { useNavigate, useParams } from "react-router-dom";

export default function index() {

    document.title = "Resource";
    const navigation = useNavigate()
    const { id } = useParams()
    const [state, setState] = useState({})
    const [resourceDetails, setResourceDetails] = useState({})
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (id) {
            axios.get(`/resource/${id}`).then((res) => {
                setResourceDetails(res?.data)
            })
        }
    }, [id])


    useEffect(() => {
        if (resourceDetails && resourceDetails.length !== 0) {
            const { title, category, viewers, type, status, filepath } = resourceDetails

            setState({
                ...state,
                title,
                category,
                viewers,
                type,
                status,
                filepath,
            })
        }
    }, [resourceDetails])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`/resource/${id}`, state).then((res) => {
            if (!res.data.error) {
                Swal({
                    text: "Resources Updated successfully.",
                    icon: 'success',
                    timer: 2000,
                })
                navigation("/resources")

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

    const handleDelete = () => {
        axios.delete(`/resource/${id}`).then((res) => {
            if (!res.data.error) {
                Swal({
                    text: res.data.message,
                    icon: 'success',
                    timer: 2000,
                })
                navigation("/resources")
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
                            Resource {`(#${id})`}

                        </h1>



                        <div className="box  ">
                            <Formik initialValues={state} >
                                <Form onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="title" className="block mb-2">
                                                Title:
                                            </label>
                                            <Field
                                                type="text"
                                                id="title"
                                                name="title"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                                value={state.title}
                                            />
                                            <ErrorMessage name="title" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="viewers" className="block mb-2">
                                                Viewers:
                                            </label>
                                            <Field
                                                as="select"
                                                id="viewers"
                                                name="viewers"
                                                value={state.viewers}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={""}>{"Select Viewers"}</option>

                                                {resourceViewers && resourceViewers.length !== 0 &&
                                                    resourceViewers?.map((option) => (

                                                        <option value={option.value}>{option.label}</option>
                                                    ))
                                                }

                                            </Field>
                                            <ErrorMessage name="viewers" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="category" className="block mb-2">
                                                Category:
                                            </label>
                                            <Field
                                                as="select"
                                                id="category"
                                                name="category"
                                                value={state.category}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={""}>Select Category</option>

                                                {resourceCategory && resourceCategory.length !== 0 &&
                                                    resourceCategory?.map((option) => (

                                                        <option value={option.value}>{option.label}</option>
                                                    ))
                                                }

                                            </Field>
                                            <ErrorMessage name="category" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="type" className="block mb-2">
                                                Type:
                                            </label>
                                            <div className="flex items-center">
                                                <label className="mr-4">
                                                    <Field
                                                        type="radio"
                                                        name="type"
                                                        value={"File"}
                                                        checked={state.type === 'File'}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    File
                                                </label>
                                                <label>
                                                    <Field
                                                        type="radio"
                                                        name="type"
                                                        value="Link"
                                                        checked={state.type === 'Link'}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    Link
                                                </label>
                                            </div>
                                            <ErrorMessage name="type" component="div" className="text-red-500" />
                                        </div>
                                        {
                                            state.type === "File" ?

                                                <div className="w-full md:w-1/2 px-2 mb-4">
                                                    <label htmlFor="filepath" className="block mb-2">
                                                        Upload:
                                                    </label>
                                                    <Field
                                                        type="file"
                                                        id="filepath"
                                                        name="filepath"
                                                        className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                        required
                                                        onChange={handleChange}
                                                    // value={state.filepath}
                                                    />
                                                    <ErrorMessage name="filepath" component="div" className="text-red-500" />
                                                </div>
                                                :
                                                <div className="w-full md:w-1/2 px-2 mb-4">
                                                    <label htmlFor="filepath" className="block mb-2">
                                                        URL:
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="filepath"
                                                        name="filepath"
                                                        className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                        required
                                                        onChange={handleChange}
                                                        value={state.filepath}
                                                    />
                                                    <ErrorMessage name="filepath" component="div" className="text-red-500" />
                                                </div>
                                        }
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="status" className="block mb-2">
                                                Status:
                                            </label>
                                            <div className="flex items-center">
                                                <label className="mr-4">
                                                    <Field
                                                        type="radio"
                                                        name="status"
                                                        value={"Pending"}
                                                        checked={state.status === 'Pending'}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    Pending
                                                </label>
                                                <label>
                                                    <Field
                                                        type="radio"
                                                        name="status"
                                                        value="Live"
                                                        checked={state.status === 'Live'}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    Live
                                                </label>
                                            </div>
                                            <ErrorMessage name="status" component="div" className="text-red-500" />
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
                                                type="button"
                                                onClick={() => {
                                                    Swal({
                                                        text: 'Are you sure you want to remove this record?',
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor: 'red',
                                                        confirmButtonText: 'Delete',
                                                        cancelButtonText: 'Cancel'
                                                    }).then((result) => {
                                                        handleDelete()
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
