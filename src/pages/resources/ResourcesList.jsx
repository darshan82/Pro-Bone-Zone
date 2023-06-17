import React, {  useEffect} from "react";
import Footer from "../../component/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar/navbar";

export default function index()
{
    let navigation = useNavigate()
    const { pathname } = useLocation();
    const title = pathname.replace("/" , "").charAt(0).toUpperCase() + pathname.slice(2)
    document.title = title+""+"List";

    useEffect(() =>
    {
        window.scrollTo(0, 0)
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
                            {title}
                        </h1>
                        <div className="flex justify-end">
                            <button
                                onClick={() =>
                                {
                                    navigation("/Territories/null/?id=add");
                                }}
                                className="bg-[#EC672C] mb-4 px-5 py-1 rounded-sm text-white"
                            >
                                Add
                            </button>
                        </div>
                        <div className="overflow-x-auto">

                        <table className="table-auto min-w-full">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2 text-left">Id</th> {/* Empty first column */}
                                    <th className="border px-4 py-2 text-left">Category</th>
                                    <th className="border px-4 py-2 text-left">Viwers</th>
                                    <th className="border px-4 py-2 text-left">Type</th>
                                    <th className="border px-4 py-2 text-left">Filepath</th>
                                    <th className="border px-4 py-2 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        onClick={() =>
                                        {
                                            navigation("/Territories/1/?id=add");

                                        }}
                                        className="border px-4 py-2 cursor-pointer text-purple-600">Row 1</td>
                                    <td className="border px-4 py-2 ">Data 1</td>
                                    <td className="border px-4 py-2">Data 2</td>
                                    <td className="border px-4 py-2">Data 2</td>
                                    <td className="border px-4 py-2">Data 2</td>
                                    <td className="border px-4 py-2">Data 3</td>
                                </tr>

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
