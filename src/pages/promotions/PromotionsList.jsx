import React, { useContext, useEffect, useState } from "react";
import Footer from "../../component/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar/navbar";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { userTypes } from "../../constants";

export default function index() {
    let navigation = useNavigate()
    const { user } = useContext(UserContext)
    const location = useLocation()
    const [promotions, setPromotions] = useState([])
    const [territories, setTerritories] = useState([])
    document.title = "Promotions";


    const getPromotions = () => {
        axios.get(`/promotion`).then((res) => {

            if (location?.state?.tId) {
                let updatedList = res?.data?.filter((item) => item?.[`territory-id`] === location.state?.tId)
                setPromotions(updatedList)
            }
            else {
                setPromotions(res?.data)
            }
        }
        )
    }


    const getTerritories = () => {
        axios.get(`/territory`).then((res) => {
            setTerritories(res?.data)
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getPromotions()
        {
            user?.permit === userTypes.admin &&
                getTerritories()
        }
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
                    <div className="container mx-auto py-8 ">
                        <div className="flex justify-between ">

                            <h1
                                className=" text-[#2E5FB7]  lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5"
                            >
                                Promotions
                            </h1>
                        </div>
                        {user?.permit === userTypes.admin ?
                            <div className="flex justify-end">

                                <div className="w-full md:w-1/4 px-2 mb-4">
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
                            :


                            <div className="flex justify-end">
                                <button
                                    onClick={() => {
                                        navigation("/promotions/add");
                                    }}
                                    className="bg-[#EC672C] mb-4 px-5 py-1 rounded-sm text-white"
                                >
                                    Add
                                </button>
                            </div>
                        }

                        <div className="overflow-x-auto">
                            <table className="table-auto min-w-full ">

                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2 text-left">ID</th> {/* Empty first column */}
                                        <th className="border px-4 py-2 text-left">Type</th>
                                        <th className="border px-4 py-2 text-left">Attendees</th>
                                        <th className="border px-4 py-2 text-left">URL</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {promotions && promotions?.length !== 0 &&
                                        promotions?.map((item) => (

                                            <tr>
                                                <td onClick={() => navigation(`/promotions/${item?.id}`)} className="border px-4 py-2 cursor-pointer text-purple-600">{item?.id}</td>
                                                <td className="border px-4 py-2 ">{item?.[`ptype`]}</td>
                                                <td className="border px-4 py-2">{item?.attendees}</td>
                                                <td className="border px-4 py-2">{item?.[`p-url`]}</td>
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
