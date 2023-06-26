import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar/navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function index() {
    document.title = "Blogs";
    const navigation = useNavigate()

    const [blogsList, setBlogsList] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const getBlogs = () => {
        axios.get(`/blogs`).then((res) => {
            setBlogsList(res.data)
        })
    }

    useEffect(() => {
        getBlogs()
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
                            Blogs
                        </h1>
                        <div className="flex justify-end">
                            <button
                                onClick={() => {
                                    navigation("/blogs/add");
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
                                        <th className="border px-4 py-2 text-left">Category</th>
                                        <th className="border px-4 py-2 text-left">Subcategory</th>
                                        <th className="border px-4 py-2 text-left">Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogsList && blogsList?.length !== 0 && blogsList?.map((item) => (
                                        <tr>
                                            <td className="border px-4 py-2">{item?.category}</td>
                                            <td className="border px-4 py-2">{item?.subcategory}</td>
                                            <td className="border px-4 py-2 cursor-pointer text-purple-600"><div className="flex justify-between "><p onClick={() => navigation(`/blogs/${item?.id}`)}>{item?.title}</p> <Link to={`/blog/${item.id}`}><img src="/src/images/BlogIcon.png" width={15} height={5} alt="blogPage" /></Link></div></td>
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
