import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar/navbar";
import axios from "axios";

export default function index() {
    let navigation = useNavigate()
    const location = useLocation()
    const [sponsors , setSponsors ] =  useState([])
    document.title = "Sponsors";

    const getSponsors = ()=>{
        if(location?.state?.tId){
            axios.get(`/sponsor/${location?.state?.tId}`).then((res)=>setSponsors(res?.data?.sponsors))
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getSponsors()
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
                            Sponsors
                        </h1>
                        <div className="flex justify-end">
                            <button
                                onClick={() => {
                                    navigation("/staff/add");
                                }}
                                className="bg-[#EC672C] mb-4 px-5 py-1 rounded-sm text-white"
                            >
                                Add
                            </button>
                        </div>

                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2 text-left">ID</th> {/* Empty first column */}
                                    <th className="border px-4 py-2 text-left">Name</th>
                                    <th className="border px-4 py-2 text-left">Category</th>
                                    <th className="border px-4 py-2 text-left">Type</th>
                                    <th className="border px-4 py-2 text-left">Webpage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sponsors && sponsors?.length !==0 && 
                                sponsors?.map((item)=>(

                                    <tr>
                                    <td  className="border px-4 py-2">{item?.id}</td>
                                    <td onClick={()=>navigation(`/sponsors/${item?.id}`)}  className="border px-4 py-2 cursor-pointer text-purple-600 ">{item?.[`organization-name`]}</td>
                                    <td  className="border px-4 py-2">{item?.scategory}</td>
                                    <td  className="border px-4 py-2">{item?.stype}</td>
                                    <td  className="border px-4 py-2">{item?.webpage}</td>
                                </tr>
                                    ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}
