import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import { ErrorMessage, Formik } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import { consultantCategory, promoterCategory, userTypes } from "../../constants";
import Navbar from "../../component/Navbar/navbar";

export default function index() {
    document.title = "Add Sponsor"
    const [state, setState] = useState({ scategory: "consultant"  , territoryId:100, editId:2})
    const [type, setType] = useState([])
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (state.scategory == "consultant") {
            setType(consultantCategory)
        }
        else {
            setType(promoterCategory)

        }
    }, [state.scategory])

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`/sponsor/add`, state).then((res) => {
            setState({})
            Swal({
                title:  "Sponsor Created Successfully",
                icon: 'success',
                timer: 2000,
            })
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
                            {"Add Sponsor"}

                        </h1>

                        <div className="box">
                            <Formik initialValues={state}>

                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="name_first" className="block mb-2">
                                                Territory:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="name_first"
                                                    name="name_first"
                                                    value={state.name_first}
                                                    onChange={handleChange}
                                                    autoComplete="given-name"
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="scategory" className="block mb-2">
                                                Category:
                                            </label>
                                            <div className="flex items-center">
                                                <label className="mr-4">
                                                    <input
                                                        type="radio"
                                                        name="scategory"
                                                        value={"consultant"}
                                                        checked={state.scategory === 'consultant'}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    Consultant
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="scategory"
                                                        value="promoter"
                                                        checked={state.scategory === 'promoter'}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    Promoter
                                                </label>
                                            </div>
                                            <ErrorMessage name="advance" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="stype" className="block mb-2">
                                                Type:
                                            </label>
                                            <select
                                                id="stype"
                                                name="stype"
                                                value={state.stype || "Select Sponsor Type"}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={null} disabled>{"Select Licensee"}</option>

                                                {type && type.length !== 0 &&
                                                    type?.map((option) => (

                                                        <option value={option?.value}>{option?.label}</option>
                                                    ))
                                                }

                                            </select>
                                            <ErrorMessage name="rating" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="organizationName" className="block mb-2">
                                                Name:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="organizationName"
                                                    name="organizationName"
                                                    value={state.organizationName}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="webpage" className="block mb-2">
                                                Web Page:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="webpage"
                                                    name="webpage"
                                                    value={state.webpage}
                                                    onChange={handleChange}
                                                    autoComplete="webpage"
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="logo" className="block mb-2">
                                                Logo:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="password"
                                                    name="logo"
                                                    value={state.logo}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="description" className="block mb-2">
                                                Description:
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    value={state.description}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                ></textarea>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">


                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="contactName" className="block mb-2">
                                                Contact:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="contactName"
                                                    name="contactName"
                                                    value={state.contactName}
                                                    onChange={handleChange}
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
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
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
