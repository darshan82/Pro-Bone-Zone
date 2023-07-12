import React, { useContext, useEffect, useState } from "react";
import Footer from "../../component/Footer";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import Navbar from "../../component/Navbar/navbar";
import { eventTypes, timeList } from "../../constants";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import moment from "moment";

export default function index() {

    document.title = "Event";
    const { user } = useContext(UserContext)
    const navigation = useNavigate()
    const { id } = useParams()
    const [state, setState] = useState({})
    const [eventDetails, setEventDetails] = useState({ attendees: 10, edit_id: 2 })
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (id) {
            axios.get(`/event/${id}`).then((res) => {
                setEventDetails(res?.data)
            })
        }
    }, [id])


    useEffect(() => {
        if (eventDetails && eventDetails.length !== 0) {
            const { etype, city, edate, street1, street2, street3, capacity } = eventDetails

            setState({
                ...state,
                capacity,
                etype,
                time_start: eventDetails?.[`time-start`],
                time_end: eventDetails?.[`time-end`],
                edate,
                city,
                street1,
                street2,
                street3,
            })
        }
    }, [eventDetails])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`/event/${id}`, state).then((res) => {
            if (!res.data.error) {
                Swal({
                    text: "Event Updated successfully.",
                    icon: 'success',
                    timer: 2000,
                })
                navigation("/Events")

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
        axios.delete(`/event/${id}`).then((res) => {
            if (!res.data.error) {
                Swal({
                    text: res.data.message,
                    icon: 'success',
                    timer: 2000,
                })
                navigation("/Events")
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
                            Event {`(#${id})`}

                        </h1>



                        <div className="box  ">
                            <Formik initialValues={state} >
                                <Form onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label className="block mb-2">
                                                Territory:
                                            </label>
                                            <Field
                                                name="territory"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                disabled
                                                value={user?.territory ? user?.territory?.state + ", " + user?.territory?.county : ""}
                                            />
                                            <ErrorMessage name="territory" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="etype" className="block mb-2">
                                                Type:
                                            </label>
                                            <Field
                                                as="select"
                                                id="etype"
                                                name="etype"
                                                value={state.etype}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={""}>{"Select Viewers"}</option>

                                                {eventTypes && eventTypes.length !== 0 &&
                                                    eventTypes?.map((option) => (

                                                        <option value={option.value}>{option.label}</option>
                                                    ))
                                                }

                                            </Field>
                                            <ErrorMessage name="etype" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="edate" className="block mb-2">
                                                Date:
                                            </label>
                                            <Field
                                                type="date"
                                                id="edate"
                                                name="edate"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                                value={moment(state.edate).format('YYYY-MM-DD')}
                                            />
                                            <ErrorMessage name="edate" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="time_start" className="block mb-2">
                                                Start Time:
                                            </label>
                                            <Field
                                                as="select"
                                                id="time_start"
                                                name="time_start"
                                                value={state.time_start}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={""}>{"Select Time"}</option>

                                                {timeList && timeList.length !== 0 &&
                                                    timeList?.map((option) => (

                                                        <option value={option}>{option}</option>
                                                    ))
                                                }

                                            </Field>
                                            <ErrorMessage name="time_start" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="time_end" className="block mb-2">
                                                End Time:
                                            </label>
                                            <Field
                                                as="select"
                                                id="time_end"
                                                name="time_end"
                                                value={state.time_end}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={""}>{"Select Time"}</option>

                                                {timeList && timeList.length !== 0 &&
                                                    timeList?.map((option) => (

                                                        <option value={option}>{option}</option>
                                                    ))
                                                }

                                            </Field>
                                            <ErrorMessage name="time_end" component="div" className="text-red-500" />
                                        </div>


                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="capacity" className="block mb-2">
                                                Capacity:
                                            </label>
                                            <Field
                                                type="text"
                                                id="capacity"
                                                name="capacity"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                                value={state.capacity}
                                            />
                                            <ErrorMessage name="capacity" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="city" className="block mb-2">
                                                City:
                                            </label>
                                            <Field
                                                type="text"
                                                id="city"
                                                name="city"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                                value={state.city}
                                            />
                                            <ErrorMessage name="city" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="street1" className="block mb-2">
                                                Street1:
                                            </label>
                                            <Field
                                                type="text"
                                                id="street1"
                                                name="street1"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                                value={state.street1}
                                            />
                                            <ErrorMessage name="street1" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="street2" className="block mb-2">
                                                Street2:
                                            </label>
                                            <Field
                                                type="text"
                                                id="street2"
                                                name="street2"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                onChange={handleChange}
                                                value={state.street2}
                                            />
                                            <ErrorMessage name="street2" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="street3" className="block mb-2">
                                                Street3:
                                            </label>
                                            <Field
                                                type="text"
                                                id="street3"
                                                name="street3"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                onChange={handleChange}
                                                value={state.street3}
                                            />
                                            <ErrorMessage name="street3" component="div" className="text-red-500" />
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
                                                        buttons: {
                                                            cancel: "Cancel",
                                                            confirm: "OK"
                                                        },
                                                    }).then((result) => {
                                                        if (result) {

                                                            handleDelete()
                                                        }
                                                        else {
                                                            swal.close()
                                                        }
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
