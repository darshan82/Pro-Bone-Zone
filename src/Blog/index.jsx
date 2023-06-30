import React, { useEffect, useState, } from "react";
import ArrowRight from "../assets/ArrowRight.png";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar/navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function index()
{
  document.title = "Blog"
  const { id } = useParams()
  const [blog, setBlog] = useState({})
  useEffect(() =>
  {
    window.scrollTo(0, 0)
  }, [])

  const getBlog = () =>
  {
    if (id)
    {

      axios.get(`blogs/${id}`).then((res) =>
      {
        setBlog(res?.data)
      })
    }
  }

  useEffect(() =>
  {
    getBlog()
  }, [id])

  return (
    <>
      <Navbar general={true} />

      <div className="bg-[#EAEFF8] pt-3 pb-2">
        <div className="flex flex-col  ml-10  md:ml-20 lg:ml-44  sm:ml-10 sm:justify-center md: items-start justify-center ">
          <h1
            className=" text-[#2E5FB7] font-inter font-semibold text-3xl leading-10 w-full mb-5"
          >
            Blog
          </h1>
          <div className="flex flex-row items-center mt-8 mb-12 ml-0 md:ml-0 ">
            <h2 className="text-md ">Home</h2>
            <img src={ArrowRight} alt="Arrow Right" className="mx-3" />
            <h2 className="text-md ">Blog</h2>
          </div>
        </div>


      </div>


<center>

      <h1 className="text-center text-[#414141] sm:text-center sm:text-3xl md:text-center lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-3xl leading-10  lg:w-[450px] w-full  my-1 mb-5 lg:pt-5 pr-5 lg:pr-9 lg:ml-44 pl-1">
        {blog?.title}
      </h1>
</center>
      <div className="bg-white p-2   pr-5 lg:pr-9 lg:ml-44">
        <div className=" mx-auto text-left">
          <p className="text-gray-700 text-lg leading-relaxed ">
            <div dangerouslySetInnerHTML={{ __html: blog?.blog_text }}></div>
          </p>



        </div>
      </div>
      <div className="bg-[#061133] p-2">
        <Footer />

      </div>
    </>
  );
}
