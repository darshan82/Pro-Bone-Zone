import React, { useContext, useEffect, useState } from "react";
import Footer from "../../component/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar/navbar";
import axios from "axios";


export default function index() {
    const location = useLocation()
    let navigation = useNavigate()
    const [licenseesList, setLicenseesList] = useState([])
    document.title = "Licensees";

    const getLicensees = () => {
        axios.get(`/user/licensee`).then((res) => {
            if (location?.state?.licenseeId) {
                let updatedList = res.data?.filter((item) => item.id == location?.state?.licenseeId)
                setLicenseesList(updatedList)
            }
            else {
                setLicenseesList(res.data)
            }
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getLicensees()

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
                            Licensees
                        </h1>
                        <div className="flex justify-end">
                            <button
                                onClick={() => {
                                    navigation("/licensee/add");
                                }}
                                className="bg-[#EC672C] mb-4 px-5 py-1 rounded-sm text-white"
                            >
                                Add
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table-auto min-w-full ">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2 text-left">ID</th> {/* Empty first column */}
                                        <th className="border px-4 py-2 text-left">Name</th>
                                        <th className="border px-4 py-2 text-left">Phone</th>
                                        <th className="border px-4 py-2 text-left">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {licenseesList && licenseesList?.length !== 0 &&
                                        licenseesList?.map((item) => (

                                            <tr>
                                                <td className="border px-4 py-2">{item?.id}</td>
                                                <td onClick={() => navigation(`/licensee/${item?.id}`)} className="border px-4 py-2 cursor-pointer text-purple-600 ">{item?.[`name-last`] + " " + item?.[`name-first`]}</td>
                                                <td className="border px-4 py-2">{item?.phone}</td>
                                                <td className="border px-4 py-2">{item?.email}</td>
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
