import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import {  useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar/navbar";
import axios from "axios";

export default function index() {
    let navigation = useNavigate()

    const [territories , setTerritories ] =  useState([])
    document.title = "Territories";

    const getTerritories = ()=>{
            axios.get("/territory").then((res)=>setTerritories(res?.data))
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getTerritories()
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
                            Territories
                            {/* {title} */}
                        </h1>
                        <div className="flex justify-end">
                            <button
                                onClick={() => {
                                    navigation("/Territories/add");
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
                                    <th className="border px-4 py-2 text-left">Territory</th> {/* Empty first column */}
                                    <th className="border px-4 py-2 text-left">Licensee</th>
                                    <th className="border px-4 py-2 text-left">Staff</th>
                                    <th className="border px-4 py-2 text-left">Sponsors</th>
                                    <th className="border px-4 py-2 text-left">Promotions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {territories && territories?.length !==0 && 
                                territories?.map((item)=>(
                                    
                                    <tr>
                                    <td onClick={()=>navigation(`/territories/${item?.id}`)} className="border px-4 py-2 cursor-pointer text-purple-600">{item?.state+", "+ item?.county}</td>
                                    <td onClick={()=>navigation(`/licensee`,{state:{licenseeId:item?.[`licensee-id`]}})} className="border px-4 py-2 cursor-pointer text-purple-600 ">{item?.[`name-first`] +" "+ item?.[`name-last`] }</td>
                                    <td onClick={()=>navigation(`/staff`,{state:{tId:item?.id}})} className="border px-4 py-2 cursor-pointer text-purple-600">Staff</td>
                                    <td onClick={()=>navigation(`/sponsors`,{state:{tId:item?.id}})} className="border px-4 py-2 cursor-pointer text-purple-600">Sponsors</td>
                                    <td onClick={()=>navigation(`/promotions`,{state:{tId:item?.id}})} className="border px-4 py-2 cursor-pointer text-purple-600">Promotions</td>
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
