import React, {  useEffect, useRef, useState } from "react";
import Footer from "../../component/Footer";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import Navbar from "../../component/Navbar/navbar";
import { PromotionTypes } from "../../constants";
import Checkbox from "./checkBox";
import moment from "moment";

export default function index() {
    document.title = "Add Promotion";
    const [state, setState] = useState({ territoryId: 1, editId: 2, locked: 0 })
    const [events, setEvents] = useState([])
    const [eventCheck, setEventCheck] = useState(false)
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const getEvents = () => {
        axios.get(`/event`).then((res) => {
            setEvents(res.data)
        })
    }

    useEffect(() => {
        let { eventId1, eventId2, eventId3, eventId4 } = state
        if (eventId1 || eventId2 || eventId3 || eventId4) {
            setEventCheck(true)
        }
        else {
            setEventCheck(false)
        }
    }, [state])


    useEffect(() => {
        getEvents()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (eventCheck) {

            axios.post(`/promotion/add`, state).then((res) => {
                if (!res.data.error) {
                    setState({})
                    Swal({
                        text: "Promotion added successfully.",
                        icon: 'success',
                        timer: 2000,
                    })
                    history.go(-1)

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
        else {
            Swal({
                title: "Add Event Alert ",
                text: "Please select atleast one event to create this promotion",
                icon: 'error',
                timer: 4000,

            })
        }
    }



    useEffect(() => {
    }, [state])



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
                            Add Promotion

                        </h1>



                        <div className="box  ">
                            <Formik initialValues={state} onSubmit={handleSubmit} >
                                <Form onSubmit={handleSubmit} >
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label className="block mb-2">
                                                Territory:
                                            </label>
                                            <Field
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                value={"state, county"}
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



                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="pUrl" className="block mb-2">
                                                URL:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="pUrl"
                                                    name="pUrl"
                                                    value={state.pUrl}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="attendees" className="block mb-2">
                                                Attendees:
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="attendees"
                                                    id="attendees"
                                                    name="attendees"
                                                    value={state.attendees}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full  px-2 mb-4">
                                        <p className="block mb-2">Events in Promotion:</p>
                                        <div className="overflow-x-auto">
                                            <table className="table-auto min-w-full">
                                                <thead>

                                                    <tr>

                                                        <th className="border px-4 py-2 text-left">Select</th>
                                                        <th className="border px-4 py-2 text-left">Date</th>
                                                        <th className="border px-4 py-2 text-left">Time</th>
                                                        <th className="border px-4 py-2 text-left">City</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {events && events.length !== 0 && events?.map((item, i) => (

                                                        <tr>
                                                            <td className="border px-4 py-2"><Checkbox key={i} event={`eventId${i + 1}`} eventId={item?.id} state={state} setState={setState} /></td>
                                                            <td className="border px-4 py-2">{moment(item?.edate).format("LL")}</td>
                                                            <td className="border px-4 py-2">{item?.[`time-start`]}</td>
                                                            <td className="border px-4 py-2">{item?.city}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-5">

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


                        </div>
                    </div>

                </div>

            </div >

            <Footer />

        </>
    );
}