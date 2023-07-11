import React, { useContext, useEffect, useRef, useState } from "react";
import Footer from "../../component/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment/moment";
import Navbar from "../../component/Navbar/navbar";
import { userTypes } from "../../constants";
import { UserContext } from "../../context/UserContext";

export default function index()
{
    let navigation = useNavigate()
    const { user } = useContext(UserContext)
    const { pathname } = useLocation();
    const title = pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2)
    document.title = title;
    const [eventList, setEventList] = useState(null)
    const [territories, setTerritories] = useState([])
    const getTerritories = () =>
    {
        axios.get(`/territory`).then((res) =>
        {
            setTerritories(res?.data)
        })
    }

    useEffect(() =>
    {
        window.scrollTo(0, 0)
        if (user && user?.permit === userTypes.admin)
        {
            getTerritories()
        }
    }, [user])

    useEffect(() =>
    {
        axios.get(`/event`).then((res) =>
        {
            const data = res.data
            setEventList(data)
        })
    }, [])
    return (
        <>
            <div className="bg-[#EAEFF8] pt-2 pb-5">
                <Navbar />
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
                            {title}
                        </h1>
                        {
                            user && user?.permit === userTypes.licensee ?
                                <div className="flex justify-end">
                                    <button
                                        onClick={() =>
                                        {
                                            navigation("/events/add");
                                        }}
                                        className="bg-[#EC672C] mb-4 px-5 py-1 rounded-sm text-white"
                                    >
                                        Add
                                    </button>
                                </div>
                                : user?.permit === userTypes.admin ?
                                    <div className="flex justify-end">

                                        <div className=" w-full md:w-1/4 px-2 mb-4">

                                            <select
                                                id="licenseeId"
                                                name="licenseeId"
                                                // value={state.licenseeId || "Select Rating"}
                                                // onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={null} >{"ALL"}</option>

                                                {territories && territories.length !== 0 &&
                                                    territories?.map((option) => (

                                                        <option value={option?.id}>{option?.state + " " + option?.county}</option>
                                                    ))
                                                }

                                            </select>
                                        </div>
                                    </div>
                                    : ""}
                        <div className="overflow-x-auto">
                            {
                                user?.permit !== userTypes.staff ?
                                    <table className="table-auto min-w-full ">
                                        <thead>
                                            <tr>
                                                <th className="border px-4 py-2 text-left"> Location</th>
                                                <th className="border px-4 py-2 text-left"> Date</th>
                                                <th className="border px-4 py-2 text-left">Time </th>
                                                <th className="border px-4 py-2 text-left"> Schedule</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                eventList && eventList.length !== 0 ? eventList?.map((item) => (


                                                    <tr>
                                                        <td onClick={() => { navigation(`/events/${item?.id}}`) }} className="border px-4 py-2 cursor-pointer text-purple-600">{item?.state + ", " + item?.city}</td>
                                                        <td
                                                            className="border px-4 py-2">{moment(item?.edate).format("ddd, MMMM D, YYYY")}</td>
                                                        <td className="border px-4 py-2">{item['time-start']}</td>
                                                        <td onClick={() => { navigation(`/schedule/${item?.id}/${item['time-start']}`) }} className="border px-4 py-2 cursor-pointer text-purple-600">Schedule</td>
                                                    </tr>
                                                ))

                                                    : ""}
                                        </tbody>
                                    </table>
                                    : (

                                        <table className="table-auto min-w-full ">
                                            <thead>
                                                <tr>
                                                    <th className="border px-4 py-2 text-left"> Date</th>
                                                    <th className="border px-4 py-2 text-left">Time </th>
                                                    <th className="border px-4 py-2 text-left"> City</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    eventList && eventList.length !== 0 ? eventList?.map((item) => (


                                                        <tr>

                                                            <td
                                                                onClick={() => { navigation(`/schedule/${item?.id}/${item['time-start']}`) }} className="border px-4 py-2 cursor-pointer text-purple-600">{moment(item?.edate).format("ddd, MMMM D, YYYY")}</td>
                                                            <td className="border px-4 py-2">{item['time-start']}</td>
                                                            <td className="border px-4 py-2">{item['city']}</td>
                                                        </tr>
                                                    ))

                                                        : ""}
                                            </tbody>
                                        </table>
                                    )
                            }

                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}
