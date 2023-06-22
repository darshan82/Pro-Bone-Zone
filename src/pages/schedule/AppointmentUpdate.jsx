import React, { useContext, useEffect, useRef, useState } from "react";
import Footer from "../../component/Footer";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';
import { EventContext } from "../../context/EventContext";
import axios from "axios";
import { interests, ratings } from "../../constants";
import Navbar from "../../component/Navbar/navbar";

export default function index()
{
    const { event } = useContext(EventContext)
    document.title = "Appointment";

    const [state, setState] = useState({ advance: "No", status: "No Show" })
    const [sponsor, setSponsor] = useState([])
    const [timeslots, setTimeSlots] = useState([])
    const [appointmentId, setAppointmentId] = useState(null)
    const [customerId, setcustomerId] = useState(null)


    const handleChange = (e) =>
    {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        axios.put(`appointment/${appointmentId}/${customerId}`, state).then((res) =>
        {
            if (!res.data.error)
            {
                setState({})
                Swal({
                    text: "Appointment updated successfully.",
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

    useEffect(() =>
    {
        axios.get("sponsor/100").then((res) =>
        {
            setSponsor(res.data?.sponsors)
        })
    }, [])



    useEffect(() =>
    {
        if (event)
        {
            console.log(event)
            const sortableTimes = event?.timeslots.map(time =>
            {
                const [hour, minute, period] = time.split(/:| /);
                const isPM = period.toUpperCase() === "PM";
                const militaryHour = isPM ? parseInt(hour, 10) + 12 : parseInt(hour, 10);
                return `${militaryHour.toString().padStart(2, "0")}:${minute}`;
            });

            // Sort the times in ascending order
            sortableTimes.sort();

            // Convert back to the original format
            const sortedTimes = sortableTimes.map(time =>
            {
                const [hour, minute] = time.split(":");
                const militaryHour = parseInt(hour, 10);
                const period = militaryHour >= 12 ? "PM" : "AM";
                const displayHour = militaryHour > 12 ? militaryHour - 12 : militaryHour;
                return `${displayHour}:${minute.padStart(2, "0")} ${period}`;
            });

            setTimeSlots(sortedTimes)
            setState({
                ...state,
                firstName: event[`name-first`],
                lastName: event[`name-last`],
                interest: event?.interest,
                timeslot: event?.timeslot,
                consultant: event?.consultant,
                companyId: event[`company-id`],
                rating: event.rating,
                feedback: event.feedback,
                notes: event?.notes,
                advance: event?.advance,
                status: event?.status,



            })
            setAppointmentId(event?.id)
            setcustomerId(event?.[`customer-id`])
        }

    }, [event])

    const handleDelete = () =>
    {
        axios.delete(`appointment/delete/${appointmentId}`).then((res) =>
        {
            if (!res.data.error)
            {
                Swal({
                    text: res.data.message,
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
                            <Formik initialValues={state} onSubmit={handleSubmit} >
                                <Form onSubmit={handleSubmit} >
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="firstName" className="block mb-2">
                                                First Name:
                                            </label>
                                            <Field
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                                value={state.firstName}
                                                disabled={true}
                                            />
                                            <ErrorMessage name="firstName" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="lastName" className="block mb-2">
                                                Last Name:
                                            </label>
                                            <Field
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                                value={state.lastName}
                                                disabled={true}

                                            />
                                            <ErrorMessage name="lastName" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="interest" className="block mb-2">
                                                Interest:
                                            </label>
                                            <select
                                                id="interest"
                                                name="interest"
                                                value={state.interest}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={null} disabled>{"Select Interest"}</option>

                                                {interests && interests.length !== 0 &&
                                                    interests?.map((option) => (

                                                        <option value={option.value}>{option.label}</option>
                                                    ))
                                                }

                                            </select>
                                            <ErrorMessage name="interest" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="timeslot" className="block mb-2">
                                                Time:
                                            </label>
                                            <select
                                                id="timeslot"
                                                name="timeslot"
                                                value={state.timeslot}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={null} disabled>{"Select Time"}</option>

                                                {timeslots && timeslots.length !== 0 &&
                                                    timeslots.sort()?.map((option) => (

                                                        <option value={option}>{option}</option>
                                                    ))
                                                }

                                            </select>
                                            <ErrorMessage name="timeslot" component="div" className="text-red-500" />
                                        </div>  <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="consultant" className="block mb-2">
                                                Consultant:
                                            </label>
                                            <Field
                                                type="text"
                                                id="consultant"
                                                name="consultant"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                value={state.consultant}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="consultant" component="div" className="text-red-500" />
                                        </div>  <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="companyId" className="block mb-2">
                                                Company:
                                            </label>
                                            <input
                                                id="companyId"
                                                name="companyId"
                                                value={state.companyId}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >


                                            </input>

                                            <ErrorMessage name="company" component="div" className="text-red-500" />
                                        </div>  <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="status" className="block mb-2">
                                                Status:
                                            </label>
                                            <label className="mr-4">
                                                <input
                                                    type="radio"
                                                    name="status"
                                                    value={"Attended"}
                                                    checked={state.status === 'Attended'}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                />
                                                Attended
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="status"
                                                    value="No Show"
                                                    checked={state.status === 'No Show'}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                />
                                                No Show
                                            </label>                                            <ErrorMessage name="status" component="div" className="text-red-500" />
                                        </div>  <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="advance" className="block mb-2">
                                                Advance:
                                            </label>
                                            <div className="flex items-center">
                                                <label className="mr-4">
                                                    <input
                                                        type="radio"
                                                        name="advance"
                                                        value={"Yes"}
                                                        checked={state.advance === 'Yes'}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="advance"
                                                        value="No"
                                                        checked={state.advance === 'No'}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    No
                                                </label>
                                            </div>
                                            <ErrorMessage name="advance" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="rating" className="block mb-2">
                                                Rating:
                                            </label>
                                            <select
                                                id="rating"
                                                name="rating"
                                                value={state.rating || "Select Rating"}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={null} disabled>{"Select Rating"}</option>

                                                {ratings && ratings.length !== 0 &&
                                                    ratings?.map((option) => (

                                                        <option value={option}>{option}</option>
                                                    ))
                                                }

                                            </select>
                                            <ErrorMessage name="rating" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full px-2 mb-4">
                                            <label htmlFor="notes" className="block mb-2">
                                                Feedback:
                                            </label>
                                            <Field
                                                as="textarea"
                                                rows="4"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                name="feedback"
                                                required
                                                id="feedback"
                                                value={state.feedback}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="feedback" component="div" className="text-red-500" />

                                        </div>

                                        <div className="w-full px-2 mb-4">
                                            <label htmlFor="notes" className="block mb-2">
                                                Staff Notes:
                                            </label>
                                            <Field
                                                as="textarea"
                                                id="notes"
                                                name="notes"
                                                rows="4"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                                value={state.notes}
                                            />
                                            <ErrorMessage name="notes" component="div" className="text-red-500" />
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
                                                        title: 'Are you sure?',
                                                        text: "You won't be able to revert this!",
                                                        icon: 'warning',
                                                        buttons: 2,
                                                        showCancelButton: true,
                                                        confirmButtonColor: 'red',
                                                        confirmButtonText: 'Delete',
                                                        cancelButtonText: 'Cancel'
                                                    }).then((result) =>
                                                    {
                                                        if (result)
                                                        {
                                                            handleDelete()
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
