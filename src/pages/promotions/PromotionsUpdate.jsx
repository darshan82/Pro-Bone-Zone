import React, {  useEffect,  useState } from "react";
import Footer from "../../component/Footer";
import { Formik,  Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import Navbar from "../../component/Navbar/navbar";
import { useNavigate,  useParams } from "react-router-dom";
import { PromotionTypes } from "../../constants";

export default function index()
{
    document.title = "Promotion";
    const navigation = useNavigate()
    const {id} = useParams()
    const [state, setState] = useState({locked:false})
    const [pormotionDetail , setPromotionDetail] = useState({})
    const handleChange = (e) =>
    {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

   



    useEffect(()=>{
            axios.get(`/promotion/detail/${id}`).then((res)=>{
                    setPromotionDetail(res?.data)
            })

    },[id])

    const handleDelete = () =>
    {
        axios.delete(`/promotion/${id}`).then((res) =>
        {
            if (!res.data.error)
            {
                Swal({
                    text: res.data.message,
                    icon: 'success',
                    timer: 2000,
                })
                navigation("/promotions")
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


    const handleSubmit = (e) =>
    {
        e.preventDefault()
        axios.put(`/promotion/${id}`, state).then((res) =>
        {
            if (!res.data.error)
            {
                setState({})
                Swal({
                    text: "Licensee updated successfully.",
                    icon: 'success',
                    timer: 2000,
                })
                
                navigation("/promotions")
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
                          Promotion (#{id})

                        </h1>



                        <div className="box  ">
                            <Formik initialValues={state} onSubmit={handleSubmit} >
                                <Form onSubmit={handleSubmit} >
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
                                                    value={"teritoryState , counnty"}
                                                    onChange={handleChange}
                                                    autoComplete="given-name"
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                    disabled
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="licenseeId" className="block mb-2">
                                            Promotion Type:
                                            </label>
                                            <select
                                                id="licenseeId"
                                                name="licenseeId"
                                                value={state.licenseeId || "Select Rating"}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={null} disabled>{"Select Promotion Type"}</option>

                                                {PromotionTypes && PromotionTypes.length !== 0 &&
                                                    PromotionTypes?.map((option) => (

                                                        <option value={option?.value}>{option?.label}</option>
                                                    ))
                                                }

                                            </select>
                                            <ErrorMessage name="rating" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="phone" className="block mb-2">
                                                URL:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    value={state.phone}
                                                    onChange={handleChange}
                                                    autoComplete="tel"
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                    disabled
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="email" className="block mb-2">
                                            Attendees:
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
                                            <label htmlFor="locked" className="block mb-2">
                                                Lock:
                                            </label>
                                            <div className="flex items-center">
                                                <label className="mr-4">
                                                    <input
                                                        type="radio"
                                                        name="locked"
                                                        value={true}
                                                        checked={state.locked === true}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="locked"
                                                        value={false}
                                                        checked={state.locked === false}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    No
                                                </label>
                                            </div>
                                            <ErrorMessage name="type" component="div" className="text-red-500" />
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
                                                            text: 'Are you sure to remove this record ?',
                                                            icon: 'warning',
                                                            showCancelButton: true,
                                                            confirmButtonColor: 'red',
                                                            confirmButtonText: 'Delete',
                                                            cancelButtonText: 'Cancel'
                                                        }).then((result)=>{
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
