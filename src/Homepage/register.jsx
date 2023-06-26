import React, { useEffect, useRef, useState } from "react";
import Location from "../assets/Location.png";
import Time from "../assets/Time.png";
import Date from "../assets/Date.png";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Navbar from "../component/Navbar/navbar";

export default function index()
{
    const form = useRef();
    const handleChangeEventDate = (event, i) =>
    {
        if (promotion && promotion?.events && promotion?.events.length)
        {
            let e = promotion.events[event?.target?.value]
            setEvent(e)
            setSelectedDate(moment(e?.edate)
                .format("ddd MMMM Do"));
        }
    }
    const { id } = useParams()
    const [disabled, setDisabled] = useState(false)
    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, [])
    const [promotion, setPromotion] = useState([]);
    const [event, setEvent] = useState(null);

    const [date, setSelectedDate] = useState(null);

    useEffect(() =>
    {
        axios.get(`/promotion/detail/${id}`).then((res) =>
        {
            const data = res.data
            setPromotion(data)
            if (data?.events && data?.events.length > 0)
            {
                // setSelectedDate(moment(data?.events[0]?.edate).format("ddd MMMM Do"))
                setEvent(data?.events[0])

            }
        })
    }, [])
    const sendEmail = async (e) =>
    {
        e.preventDefault();

        const firstName = form.current.firstName.value;
        const lastName = form.current.lastName.value;
        const email = form.current.email.value;
        const phone = form.current.phone.value;
        const type = form.current.type.value;
        const time = form.current.time.value;
        const description = form.current.description.value;

        const data = {
            eventId: event.id,
            promotionId: id,
            date,
            firstName,
            lastName,
            email,
            phone,
            type,
            time,
            description,
        };

        try
        {
            setDisabled(true)

            await axios.post('/appointment/add', data);
            alert('Your registration request has been received successfully. Thank you');
            setDisabled(false)

            form.current.firstName.value = null;
            form.current.lastName.value = null;
            form.current.email.value = null;
            form.current.phone.value = null;
            form.current.description.value = null;
            form.current.type.value = '';
            form.current.time.value = '';
            setSelectedDate(null);
        } catch (error)
        {
            console.error('Error sending email:', error);
            alert('An error occurred while sending the email. Please try again later.');
        }
    };

    return (
        <>
            <Navbar general={true}/>

            <div className="bg-[#EAEFF8] pt-2 pb-5">
                {/* Hero Section */}

            </div>

            <div
                className=" py-10 bg-slate-100  flex  flex-col justify-center items-center "
            >
                <h1 className="text-2xl text-[#414141] font-bold  text-center  ">
                    Schedule A Consultation
                </h1>
                <p
                    className="text-center  text-[#414141] text-lg md:text-xl lg:text-xl mb-4 px-5 md:px-24 lg:px-64"
                >
                    This event will last just 4 hours, so we have limited openings.
                </p>

                <div className="bg-[#ffff] px-4 py-4 md:py-10 md:px-16 lg:py-10 lg:px-16  w-[100%] md:w-[90%] lg:w-[70%]">
                    <div className=" flex flex-col justify-center items-center sm:flex-col md:flex-row lg:flex-row">
                        <div className="w-[100%] md:w-[50%] lg:w-[50%]  ">
                            <h1 className="text-[#414141] font-bold text-2xl"> Event Info </h1>
                            <div className="flex  flex-row items-center flex-wrap mt-4">
                                <p className=" flex  flex-col items-center justify-center w-7  ">
                                    <img src={Date}></img>
                                </p>
                                <div className="flex  flex-col ">
                                    <p className="ml-2 text-[#414141] text-sm">Date </p>
                                    <p className="ml-2 text-[#061133] text-sm">
                                        {date}
                                        {/* Friday, June 23rd{" "} */}
                                    </p>
                                </div>
                            </div>
                            <div className="flex  flex-row items-center flex-wrap mt-4 ">
                                <p className=" flex  flex-col items-center justify-center  w-7 ">
                                    <img src={Time}></img>
                                </p>
                                <div className="flex  flex-col ">
                                    <p className="ml-2 text-[#414141] text-sm">Time </p>
                                    <p className="ml-2 text-[#061133] text-sm uppercase">{event && event["time-start"]} - {event && event["time-end"]}</p>
                                </div>
                            </div>{" "}
                            <div className="flex  flex-row items-center flex-wrap mt-4">
                                <p className=" flex  flex-col items-center justify-center w-7 ">
                                    <img src={Location}></img>
                                </p>
                                <div className="flex  flex-col ">
                                    <p className="ml-2 text-[#414141] text-sm">Location </p>
                                    <p className="ml-2 text-[#061133]  text-sm">
                                        {event && event["street1"]}
                                        <br />
                                        {event && event["street2"]}
                                        <br />
                                        {event && event["city"]}
                                    </p>
                                </div>
                            </div>


                        </div>
                        <div className="w-[100%] md:w-[50%] lg:w-[50%]  ">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="flex flex-col justify-center  md:flex-row lg:flex-row  flex-wrap  ">
                                    <select
                                        name="date"
                                        className="h-10  md:w-[184px] lg:px-3 lg:py-2 bg-gray-100 text-sm text-[#414141] rounded-sm m-2"
                                        onChange={handleChangeEventDate}
                                    >
                                        <option value={null} disabled selected>
                                            Select a Date
                                        </option>
                                        {
                                            promotion && promotion?.events && promotion?.events.length &&
                                            promotion.events.map((value, index) =>
                                            {
                                                let d = moment(value?.edate)
                                                    .format("ddd MMMM Do");

                                                return (
                                                    <option value={index}>{d}</option>
                                                )
                                            })
                                        }
                                    </select>

                                </div>
                                <div className="flex flex-col justify-center  md:flex-row lg:flex-row  flex-wrap   ">
                                    <input
                                        type="text"
                                        className="py-2 px-3 bg-gray-100 text-sm text-[#414141] rounded-sm m-2 "
                                        placeholder="First Name"
                                        name="firstName"
                                    ></input>
                                    <input
                                        type="text"
                                        className="py-2 px-3 bg-gray-100  text-sm text-[#414141] rounded-sm m-2"
                                        placeholder="Last Name"
                                        name="lastName"
                                    ></input>
                                </div>
                                <div className="flex flex-col justify-center  md:flex-row lg:flex-row  flex-wrap  ">
                                    <input
                                        type="email"
                                        className="py-2 px-3 bg-gray-100  text-sm text-[#414141] rounded-sm m-2"
                                        placeholder="Email"
                                        name="email"
                                    ></input>
                                    <input
                                        type="text"
                                        className="py-2 px-3 bg-gray-100  text-sm text-[#414141] rounded-sm m-2"
                                        placeholder="Phone"
                                        name="phone"
                                    ></input>
                                </div>

                                <div className="flex flex-col justify-center flex-wrap   md:flex-row lg:flex-row">
                                    <select
                                        name="type"
                                        className="h-10  md:w-[184px] lg:px-3 lg:py-2 bg-gray-100 text-sm text-[#414141] rounded-sm m-2"
                                    >
                                        <option value="" disabled selected>
                                            Select a Category
                                        </option>
                                        <option value="family-law">Family Law</option>
                                        <option value="business-law">Business Law</option>
                                    </select>

                                    <select
                                        name="time"
                                        className="h-10  md:w-[184px] lg:px-3 lg:py-2 bg-gray-100 text-sm text-[#414141] rounded-sm m-2"
                                    >
                                        <option value="" disabled selected>
                                            Select a Time
                                        </option>
                                        {
                                            promotion && promotion.availability && promotion.availability.length &&
                                            promotion.availability.filter(value => value["event_id"] == event.id).map(value =>
                                            {
                                                return (
                                                    <option className="uppercase" value={value.timeslot}>{value.timeslot}</option>

                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="flex flex-col justify-center md:flex-row lg:flex-row  flex-wrap  ">
                                    <textarea
                                        name="description"
                                        id=""
                                        placeholder="How did you hear about Pro Bono Zone?"
                                        className="bg-gray-100 p-4   md:w-96 lg:w-96 h-20 m-2"
                                    ></textarea>
                                </div>
                                <div className=" flex justify-center mt-3 md:justify-center lg:justify-center ">
                                    <button
                                        type="submit"
                                        disabled={disabled}
                                        className="bg-[#EC672C] w-full  py-2 rounded-lg text-white text-sm mx-1 lg:mx-4 lg:w-96"
                                    >
                                        Count Me In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 pt-5">

                        <h1 className="text-center font-bold text-xl">Questions? Call us at 800 626 1195</h1>
                    </div>
                </div>
            </div>
            {/* How its work Section */}






            <div className="bg-[#061133] p-2">
                <Footer />

            </div>
        </>
    );
}
