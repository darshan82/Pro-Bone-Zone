import React, { useContext, useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { userTypes } from "../../constants";
import { EventContext } from "../../context/EventContext";

export default function index()
{

    const { updateEvent } = useContext(EventContext)

    const { user } = useContext(UserContext)
    document.title = "Customers";
    const [customerList, setCustomerList] = useState([])
    const navigation = useNavigate()
    const [territories, setTerritories] = useState([])
    const [selectedTid, setSelectedTid] = useState([])
    const [filteredCustomer, setFilteredCustomer] = useState([])
    useEffect(() =>
    {
        window.scrollTo(0, 0)
        getCustomer()
        if (userTypes.admin === user?.permit)
        {
            getTerritories()
        }
    }, [user])

    const getTerritories = () =>
    {
        axios.get(`/territory`).then((res) =>
        {
            setTerritories(res?.data)
        })
    }
    const getCustomer = () =>
    {
        axios.get(`/customer`).then((res) =>
        {
            setCustomerList(res.data?.customers)
            setFilteredCustomer(res.data?.customers)
        })
    }

    useEffect(() =>
    {
        if (selectedTid)
        {
            let updatedCustomerList = customerList?.filter(({ 'territory_id': territoryId }) => territoryId == selectedTid);
            setFilteredCustomer(updatedCustomerList)
        }
        else
        {
            setFilteredCustomer(customerList)
        }

    }, [selectedTid])

    const handleChange = (e) =>
    {

        setSelectedTid(e.target.value)
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
                            Customers
                        </h1>
                        {user?.permit === userTypes.admin &&
                            <div className="flex justify-end">

                                <div className="w-full md:w-1/4 px-2 mb-4">
                                    <select
                                        id="licenseeId"
                                        name="licenseeId"
                                        // value={state.licenseeId || "Select Rating"}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                        required
                                    >
                                        <option value={""} >{"ALL"}</option>

                                        {territories && territories.length !== 0 &&
                                            territories?.map((option) => (

                                                <option value={option?.id}>{option?.state + " " + option?.county}</option>
                                            ))
                                        }

                                    </select>
                                </div>
                            </div>
                        }

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

                                    {filteredCustomer && filteredCustomer.length !== 0 ? filteredCustomer?.map((item, i) => (
                                        <tr key={i}>

                                            {console.log("item", item)}
                                            <td className="border px-4 py-2">{item?.id}</td>
                                            <td onClick={() =>
                                            {
                                                if (item?.appointments[0]?.id)
                                                {
                                                    updateEvent({
                                                        ...item,
                                                        ...item?.appointments[0]
                                                    })

                                                    navigation(`/appointment/update/${item?.appointments[0]?.appointment_id}`)
                                                }
                                            }} className="border px-4 py-2 cursor-pointer text-purple-600">{item?.[`name-first`] + " " + item?.[`name-last`]}</td>
                                            <td className="border px-4 py-2">{item?.phone}</td>
                                            <td className="border px-4 py-2">{item?.email}</td>
                                        </tr>
                                    ))
                                        : ""}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </div >

            <Footer />

        </>
    );
}
