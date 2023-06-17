import React, { useEffect, useRef, useState } from "react";
import ArrowRight from "../../assets/ArrowRight.png"
import Footer from "../../component/Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Navbar from "../../component/Navbar/navbar";

export default function index()
{
    let navigation = useNavigate()
    const { eventId, date } = useParams()
    const { pathname } = useLocation();
    const title = pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2)
    document.title = title;
    const [scheduleList, setScheduleList] = useState([])

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() =>
    {
        axios.get(`/appointment?eventId=${eventId}`).then((res) =>
        {
            const data = res.data?.appointments
            if (data && data.length !== 0)
            {
                // const updatedData = data?.filter((item) => item[`event-id`] == eventId && true)
                setScheduleList(data)
            }


        })
    }, [])

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
                            Event Schedule
                        </h1>
                        {/* <div className="flex justify-end">
                            <button
                                onClick={() =>
                                {
                                    navigation("/Territories/null/?id=add");
                                }}
                                className="bg-[#EC672C] mb-4 px-5 py-1 rounded-sm text-white"
                            >
                                Add
                            </button>
                        </div> */}
                        <div className="overflow-x-auto">
                            <table className="table-auto min-w-full">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2 text-left">ID</th> {/* Empty first column */}
                                        <th className="border px-4 py-2 text-left">Date</th>
                                        <th className="border px-4 py-2 text-left">Customer Name</th>

                                        <th className="border px-4 py-2 text-left">Address</th>

                                        <th className="border px-4 py-2 text-left">Focus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scheduleList && scheduleList.length !== 0 ? scheduleList.map((item) => (

                                        <tr>
                                            <td
                                                onClick={() =>
                                                {
                                                    navigation("/Territories/1/?id=add");

                                                }}
                                                className="border px-4 py-2 cursor-pointer ">{item?.id}</td>
                                            <td className="border px-4 py-2">{moment(item?.edate).format("LL")}</td>
                                            <td className="border px-4 py-2 text-purple-600 cursor-pointer">{item["name-first"]+" "+item["name-last"]}</td>
                                            <td className="border px-4 py-2">{item[`street1`]+" "+item[`street2`]+" "+item[`city`]}</td>
                                            <td className="border px-4 py-2">{item?.interest}</td>
                                        </tr>

                                    ))

                                        : ""}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}
