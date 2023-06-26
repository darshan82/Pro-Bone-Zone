import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import Navbar from "../../component/Navbar/navbar";
import { blogCategory, businessSubcategories, financialSubcategories, legalSubcategoris } from "../../constants";
import { useNavigate } from "react-router-dom";

export default function index() {
    document.title = "Add Blog";
    const navigation = useNavigate()
    const [state, setState] = useState({ edit_id: 2, subcategory: "" })
    const [blogSubcategory, setBlogSubcategory] = useState([])
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (state?.category === "legal") {
            setBlogSubcategory(legalSubcategoris)
        }
        else if (state?.category === "business") {
            setBlogSubcategory(businessSubcategories)
        }
        else if (state?.category === "financial") {
            setBlogSubcategory(financialSubcategories)
        }

    }, [state.category])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`/blogs/add`, state).then((res) => {
            if (!res.data.error) {
                Swal({
                    text: "Blog added successfully.",
                    icon: 'success',
                    timer: 2000,
                })
                navigation("/blogs")

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
                            Add Blog

                        </h1>



                        <div className="box  ">
                            <Formik initialValues={{ ...state }}  >
                                <Form onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap">

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
                                                <option value="">Select category</option>

                                                {blogCategory && blogCategory.length !== 0 &&
                                                    blogCategory?.map((option) => (

                                                        <option value={option.value}>{option.label}</option>
                                                    ))
                                                }

                                            </Field>
                                            <ErrorMessage name="subcategory" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="subcategory" className="block mb-2">
                                                Subcategory:
                                            </label>
                                            <Field
                                                as="select"
                                                id="subcategory"
                                                name="subcategory"
                                                value={state.subcategory}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value="">Select Subcategory</option>

                                                {blogSubcategory && blogSubcategory.length !== 0 &&
                                                    blogSubcategory?.map((option) => (

                                                        <option value={option.value}>{option.label}</option>
                                                    ))
                                                }

                                            </Field>
                                            <ErrorMessage name="subcategory" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="author" className="block mb-2">
                                                Author:
                                            </label>
                                            <Field
                                                type="text"
                                                id="author"
                                                name="author"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                                value={state.author}
                                            />
                                            <ErrorMessage name="filepath" component="div" className="text-red-500" />
                                        </div>


                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="status" className="block mb-2">
                                                Status:
                                            </label>
                                            <div className="flex items-center">
                                                <label className="mr-4">
                                                    <input
                                                        type="radio"
                                                        name="status"
                                                        value={"pending"}
                                                        checked={state.status === 'pending'}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    Pending
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="status"
                                                        value="live"
                                                        checked={state.status === 'live'}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    Live
                                                </label>
                                            </div>
                                            <ErrorMessage name="status" component="div" className="text-red-500" />
                                        </div>

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


                                    </div>
                                    <div className="w-full px-2 mb-4">
                                        <label htmlFor="blog_text" className="block mb-2">
                                            Blog-text:
                                        </label>
                                        <Field
                                            as="textarea"
                                            rows="4"
                                            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                            name="blog_text"
                                            id="blog_text"
                                            value={state.blog_text}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name="blog_text" component="div" className="text-red-500" />

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
            </div >

            <Footer />

        </>
    );
}
