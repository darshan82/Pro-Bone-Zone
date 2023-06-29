import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function index() {
    document.title = "Resources";
    const [customerList, setCustomerList] = useState([])
    const navigation = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
        getCustomer()
    }, [])

    const getCustomer = () => {
        axios.get(`/resource`).then((res) => {
            setCustomerList(res.data)
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
                            Customer
                        </h1>
                        
                        <div className="overflow-x-auto">

                            <table className="table-auto min-w-full">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2 text-left">ID</th>
                                        <th className="border px-4 py-2 text-left">Name</th>
                                        <th className="border px-4 py-2 text-left">Phone</th>
                                        <th className="border px-4 py-2 text-left">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resourcesList && resourcesList?.length !== 0 && resourcesList?.map((item) => (
                                        <tr>

                                            <td className="border px-4 py-2">{item?.category}</td>
                                            <td className="border px-4 py-2 cursor-pointer text-purple-600"><a href={item?.filepath} download={item?.type == "file" ? true : false} target="_blank">{item?.type}</a></td>
                                            <td onClick={() => navigation(`/resources/${item?.id}`)} className="border px-4 py-2 cursor-pointer text-purple-600">{item?.title}</td>
                                        </tr>
                                    ))}

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
