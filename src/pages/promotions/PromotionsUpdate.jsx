import React, { useContext, useEffect, useState } from "react";
import Footer from "../../component/Footer";
import { Formik, Form, ErrorMessage, Field } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import Navbar from "../../component/Navbar/navbar";
import { useNavigate, useParams } from "react-router-dom";
import { PromotionTypes } from "../../constants";
import Checkbox from "./CheckBox";
import moment from "moment";
import { UserContext } from "../../context/UserContext";

export default function index() {
    document.title = "Promotion";
    const { user } = useContext(UserContext)
    const navigation = useNavigate()
    const { id } = useParams()
    const [allEvents, setAllEvents] = useState([])
    const [updatedEvents, setUpdatedEvents] = useState([])
    const [eventSelected, setEventSelected] = useState([])
    const [eventState, setEventState] = useState([])
    const [state, setState] = useState({ locked: 0 })
    const [pormotionDetail, setPromotionDetail] = useState({})
    const [lock, setLock] = useState(0)
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
        if (id) {

            axios.get(`/promotion/detail/${id}`).then((res) => {
                setPromotionDetail(res?.data)
            })
        }

    }, [id])

    useEffect(() => {
        const updatedEvents = allEvents?.filter((item) => {
            let currentDate = new Date()
            let eventDate = new Date(item?.edate)

            return eventDate > currentDate && item?.etype == state.ptype
        })

        setUpdatedEvents(updatedEvents)
        setEventSelected([])
    }, [state.ptype])



    useEffect(() => {
        if (pormotionDetail) {
            const { attendees, ptype, locked } = pormotionDetail
            setLock(locked)
            setState({
                ...state,
                attendees,
                ptype,
                locked,
                pUrl: pormotionDetail?.[`p-url`],
                territoryId: pormotionDetail?.[`territory-id`]

            })
            let arr = [pormotionDetail?.[`event1-id`], pormotionDetail?.[`event2-id`], pormotionDetail?.[`event3-id`], pormotionDetail?.[`event4-id`]]
            const updatedArr = arr.filter((item)=>item !==null)
            hello(updatedArr)

        }
    }, [pormotionDetail])

    const hello =(arr)=>{
        setEventSelected(arr)
    }


    

    useEffect(() => {
        if (eventSelected && eventSelected.length !== 0) {
            const updatedObj = eventSelected?.reduce((acc, curr, i) => {
                return { ...acc, [`eventId${i + 1}`]: curr }
            }, {})
            setEventState(updatedObj)
        }

        else {

            setEventState([])
        }

    }, [eventSelected])

    const handleDelete = () => {
        axios.delete(`/promotion/${id}`).then((res) => {
            if (!res.data.error) {
                Swal({
                    text: res.data.message,
                    icon: 'success',
                    timer: 2000,
                })
                navigation("/promotions")
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


    const getEvents = () => {
        axios.get(`/event`).then((res) => {
            setAllEvents(res.data)
        })
    }

    useEffect(() => {
        getEvents()
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        if (eventSelected.length !== 0) {

            axios.put(`/promotion/${id}`, { ...state, ...eventState }).then((res) => {
                if (!res.data.error) {
                    setState({})
                    Swal({
                        text: "Promotion updated successfully.",
                        icon: 'success',
                        timer: 2000,
                    })

                    navigation("/promotions")
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
                title: "Add Event Alert",
                text: "Please select atleast single event to Update the Promotion",
                icon: 'error',
                timer: 4000,

            })
        }
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
                            <Formik initialValues={state}  >
                                <Form onSubmit={handleSubmit} >
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label className="block mb-2">
                                                Territory:
                                            </label>
                                            <div className="mt-1">
                                                <Field
                                                    type="text"
                                                    value={user?.territory ? user?.territory?.state + ", " + user?.territory?.country : ""}
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                    disabled
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="ptype" className="block mb-2">
                                                Promotion Type:
                                            </label>
                                            <Field
                                                as="select"
                                                id="ptype"
                                                name="ptype"
                                                value={state.ptype || "Select Rating"}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                disabled={Boolean(lock)}
                                            >
                                                <option value={""} >{"Select Promotion Type"}</option>

                                                {PromotionTypes && PromotionTypes.length !== 0 &&
                                                    PromotionTypes?.map((option) => (

                                                        <option value={option?.value}>{option?.label}</option>
                                                    ))
                                                }

                                            </Field>
                                            <ErrorMessage name="rating" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="pUrl" className="block mb-2">
                                                URL:
                                            </label>
                                            <div className="mt-1">
                                                <Field
                                                    type="text"
                                                    id="pUrl"
                                                    name="pUrl"
                                                    value={state.pUrl}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                    disabled
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="attendees" className="block mb-2">
                                                Attendees:
                                            </label>
                                            <div className="mt-1">
                                                <Field
                                                    id="attendees"
                                                    name="attendees"
                                                    value={state.attendees}
                                                    className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                    required
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        {
                                            !Boolean(lock) ?
                                                <div className="w-full md:w-1/2 px-2 mb-4">
                                                    <label htmlFor="locked" className="block mb-2">
                                                        Lock:
                                                    </label>
                                                    <div className="flex items-center">
                                                        <label className="mr-4">
                                                            <Field
                                                                type="radio"
                                                                name="locked"
                                                                value={1}
                                                                checked={state.locked == 1}
                                                                onChange={handleChange}
                                                                className="mr-2"
                                                            />
                                                            Yes
                                                        </label>
                                                        <label>
                                                            <Field
                                                                type="radio"
                                                                name="locked"
                                                                value={0}
                                                                checked={state.locked == 0}
                                                                onChange={handleChange}
                                                                className="mr-2"
                                                            />
                                                            No
                                                        </label>
                                                    </div>
                                                    <ErrorMessage name="type" component="div" className="text-red-500" />
                                                </div>
                                                : ""}
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
                                                            <td className="border px-4 py-2"><Checkbox key={item?.eventId} eventId={item?.id} eventSelected={eventSelected} setEventSelected={setEventSelected} disabled={Boolean(lock)} /></td>
                                                            <td className="border px-4 py-2">{moment(item?.edate).format("LL")}</td>
                                                            <td className="border px-4 py-2">{item?.[`time-start`]}</td>
                                                            <td className="border px-4 py-2">{item?.city}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="flex justify-center">

                                        <React.Fragment>
                                            {
                                                !Boolean(lock) ?
                                                    <button
                                                        type="submit"
                                                        className="bg-[#EC672C] mb-4 mr-2 px-5 py-1 rounded-sm text-white"
                                                    >
                                                        Update
                                                    </button>
                                                    :
                                                    ""}
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
