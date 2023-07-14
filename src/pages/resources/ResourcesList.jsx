import React, { useContext, useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userTypes } from "../../constants";
import { UserContext } from "../../context/UserContext";

export default function index() {
    const {user} = useContext(UserContext)
    document.title = "Resources";
    const [resourcesList, setResourcesList] = useState([])
    const navigation = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
        getResources()
    }, [])

    const getResources = () => {
        axios.get(`/resource`).then((res) => {
            setResourcesList(res.data)
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
                            Resources
                        </h1>
                        {user?.permit === userTypes.admin && 
                        <div className="flex justify-end">
                            <button
                                onClick={() => {
                                    navigation("/resources/add");
                                }}
                                className="bg-[#EC672C] mb-4 px-5 py-1 rounded-sm text-white"
                            >
                                Add
                            </button>
                        </div>
                        }
                        <div className="overflow-x-auto">

                            <table className="table-auto min-w-full">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2 text-left">Category</th>
                                        <th className="border px-4 py-2 text-left">View</th>
                                        <th className="border px-4 py-2 text-left">Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resourcesList && resourcesList?.length !== 0 && resourcesList?.map((item) => (
                                        <tr>

                                            <td className="border px-4 py-2">{item?.category}</td>
                                            <td className="border px-4 py-2 cursor-pointer text-purple-600"><a href={item?.type === "File" ? `https://probonozone-cea5b843ff95.herokuapp.com/${item?.filepath}`:item?.filepath} download={item?.type === "File"?true : false} target="_blank">{item?.type}</a></td>
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
