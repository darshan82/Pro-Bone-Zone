import React, { useContext, useEffect, useState } from "react";
import Footer from "../../component/Footer";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import Navbar from "../../component/Navbar/navbar";
import { PromotionTypes, userTypes } from "../../constants";
import Checkbox from "./CheckBox";
import moment from "moment";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";

export default function index()
{
    document.title = "Add Promotion";
    const { user } = useContext(UserContext)
    const navigation = useNavigate()
    const [state, setState] = useState({ locked: 0, pUrl: "https://probonozone.com/register" })
    const [allevents, setAllEvents] = useState([])
    const [updatedEvents, setUpdatedEvents] = useState([])
    const [eventSelected, setEventSelected] = useState([])
    const [eventState, setEventState] = useState([])
    const handleChange = (e) =>
    {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() =>
    {
        if (user && userTypes.licensee === user?.permit)
        {
            setState({
                ...state,
                territoryId: user?.territory?.id
            })
        }
    }, [user])

    const getEvents = () =>
    {
        axios.get(`/event`).then((res) =>
        {
            if (res?.data)
            {
                setAllEvents(res?.data)
            }
        })
    }

    useEffect(() =>
    {
        const updatedEvents = allevents?.filter((item) =>
        {
            let currentDate = new Date()
            let eventDate = new Date(item?.edate)

            return eventDate > currentDate && item?.etype == state.ptype
        })

        setUpdatedEvents(updatedEvents)
        setEventSelected([])
    }, [state.ptype])




    useEffect(() =>
    {
        getEvents()
    }, [])

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        if (eventSelected?.length > 0)
        {

            axios.post(`/promotion/add`, { ...state, ...eventState }).then((res) =>
            {
                if (!res.data.error)
                {
                    setState({})
                    Swal({
                        text: "Promotion added successfully.",
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
        else
        {
            Swal({
                title: "Add Event Alert ",
                text: "Please select atleast one event to create this promotion",
                icon: 'error',
                timer: 4000,

            })
        }
    }

    useEffect(() =>
    {
        if (eventSelected && eventSelected.length !== 0)
        {
            const updatedObj = eventSelected?.reduce((acc, curr, i) => { return { ...acc, [`eventId${i + 1}`]: curr } }, {})
            setEventState(updatedObj)
        }
        else
        {
            setEventState([])
        }

    }, [eventSelected])


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

                        <Formik initialValues={state} >
                            <Form onSubmit={handleSubmit} >
                                <div className="flex flex-wrap">
                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <label className="block mb-2">
                                            Territory:
                                        </label>
                                        <Field
                                            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                            required
                                            value={user?.territory ? user?.territory?.state + ", " + user?.territory?.county : " "}
                                            disabled={true}
                                        />
                                    </div>

                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <label htmlFor="ptype" className="block mb-2">
                                            Promotion Type:
                                        </label>
                                        <Field
                                            as="select"
                                            id="ptype"
                                            name="ptype"
                                            value={state.ptype}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                            required
                                        >
                                            <option value={""}>{"Select Promotion Type"}</option>

                                            {PromotionTypes && PromotionTypes.length !== 0 &&
                                                PromotionTypes?.map((option) => (

                                                    <option value={option.value}>{option.label}</option>
                                                ))
                                            }

                                        </Field>
                                        <ErrorMessage name="ptype" component="div" className="text-red-500" />
                                    </div>


                                    {/* <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="attendees" className="block mb-2">
                                                Attendees:
                                            </label>
                                            <div className="mt-1">
                                                <Field
                                                    type="attendees"
                                                    id="attendees"
                                                    name="attendees"
                                                    value={state.attendees}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                />
                                            </div>
                                        </div> */}
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
                                                {updatedEvents && updatedEvents.length !== 0 && updatedEvents?.map((item, i) => (

                                                    <tr>
                                                        <td className="border px-4 py-2"><Checkbox key={item?.eventId} eventId={item?.id} eventSelected={eventSelected} setEventSelected={setEventSelected} /></td>
                                                        <td className="border px-4 py-2">{moment(item?.edate).utc().format("LL")}</td>
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


            <Footer />

        </>
    );
}
