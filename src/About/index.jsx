import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../component/Navbar/navbar";
import SolutionCard from "../component/SolutionCard/SolutionCard";
import Button from "../component/button/button";
import OfferCard from "../component/OfferCard/OfferCard";
import HeroImage from "../assets/Hero.png";
import HeroImageLessBorder from "../assets/HerolessBorder.png";
import Heading from "../assets/heading.png";
import YourSolutionImage from "../assets/YourSolution.png";
import Work from "../assets/Work.jpeg";
import YourAdvocate from "../assets/YourAdvocate.png";
import FooterLogo from "../assets/Group6.png";
import Location from "../assets/Location.png";
import Youtube from "../assets/Youtube.png";
import LinkedinWhite from "../assets/LinkedinWhite.png";
import YoutubeWhite from "../assets/YoutubeWhite.png";
import FaceBookWhite from "../assets/FaceBookWhite.png";
import FaceBook from "../assets/Facebook.png";
import Linkedin from "../assets/Linkedin.png";
import Time from "../assets/Time.png";
import Date from "../assets/Date.png";
import LocationIcon from "../assets/Locationicon.png";
import PhoneIcon from "../assets/phoneicon.png";
import Email from "../assets/email.png";
import TheProblem from "../assets/TheProblem.png";
import Model from "../assets/Model.png";
import Procrastination from "../assets/Procrastination.png";
import Solution from "../assets/Solution.png";
import Tick from "../assets/Tick.png";
import SmithJones from "../assets/SmithJones.png";
import McIntoshTronton from "../assets/McIntoshTronton.png";
import AyalaSmithDickens from "../assets/AyalaSmithDickens.png";
import Logo from "../assets/Logo.png";
import YouTube from "react-youtube";
import ArrowRight from "../assets/ArrowRight.png";
const videId = "vD8X8qvhRxQ";
export default function index() {
  document.title="About"
  return (
    <>
      <div className="bg-[#EAEFF8] pt-3 pb-2">
        {/* <Navbar /> */}
        {/* Hero Section */}
        <div className="lg:ml-44  ">
          <h1 className="text-center text-[#2E5FB7] sm:text-center sm:text-3xl md:text-center lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-3xl leading-10  lg:w-[450px] w-full  my-1 mb-5 lg:pt-5 ">
            Your Story is Our Story
          </h1>
          <div className="flex flex-row  justify-center sm:justify-center md:justify-center lg:justify-start items-center mt-8 mb-12 ml-4 md:ml-4 ">
            <h2 className="text-md ">Home</h2>
            <img src={ArrowRight} alt="Arrow Right" className="mx-3" />
            <h2 className="text-md ">About</h2>
          </div>
        </div>
       
      </div>
    
      {/* How its work Section */}

      {/* Solution Boxes */}

      {/* A Smart Solution */}

      {/* Offer Boxes */}

   
      <div className="bg-white p-2   pr-5 lg:pr-9 lg:ml-44">
        <div className=" mx-auto text-left">
          <p className="text-gray-700 text-lg leading-relaxed">
            They say the best businesses are created by those who are trying to solve their own problems. There may be some truth to that. In any case, our own personal experience was, in fact, our motivator to launch Pro Bono Zone&trade;. We went through some very difficult challenges when we needed sound legal and business advice.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            There may be times when we feel unprepared or even embarrassed to approach an attorney. There may be times when our pocketbook makes us feel we need to procrastinate. There may be times when we have the wrong attorney and we need to make a switch. There may be times when legal situations are thrust upon us suddenly and we don't even know where to start or who to talk to.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Based on our own negative and positive experiences with attorneys and other consultants, we realized there were many who do not take full advantage of professional legal advice because of some real or perceived limiting circumstance in their life. We want to end that once and for all.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Pro Bono Zone&trade; is a simple way for people to explore their legal options in a relaxed but professional setting. There is zero cost and therefore no pressure. Whether your questions are about immigration or family law or business structure, etc., we are committed to helping you.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Thirty minutes with an experienced legal professional might not be sufficient to change the world, but the information and insights you glean from these sessions are often sufficient to gain momentum and move forward. Yes, thirty minutes may not change the world, but it might just change your world. That is our hope for everyone.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            We wish you well in your journey forward.
          </p>

          <p className="mt-4 text-gray-700 text-lg font-semibold mt-10 mb-10">
            Kevin Cannon
            SarahAnne Pryor
          </p>
        </div>
      </div>
      <div className="bg-[#061133] p-2">
        {/* <div className="flex flex-row justify-center items-center flex-wrap pt-8  m-2 ">
          <h1 className="text-2xl font-bold text-white px-5 ">
            Newsletter Sign Up
          </h1>
          <div className="bg-gray-600 w-72 sm:w-96 md:w-96 lg:w-96  h-12 rounded-sm  md:m-5  lg:m-5">
            <input
              placeholder="Enter your email here..."
              className="w-48 sm:w-72 md:w-72 lg:w-72 h-12 px-4 text-sm text-[#FFFFFF] placeholder:text-white bg-transparent border-none outline-none"
            />
            <button className="bg-[#2E5FB7] rounded-md px-5 py-2  text-sm text-white">
              Register
            </button>
          </div>
        </div> */}
        <div
          className="flex flex-row flex-wrap justify-center items-center text-center pt-16 md:text-left lg:text-left md:flex-row  md:justify-between md:items-start lg:flex-row lg:items-start lg:justify-between lg:w-[80%]  lg:ml-44 py-5 lg:pb-28"
          //style={{ paddingTop: 40 }}
        >
          <div className="text-white flex flex-col items-center md:items-start  lg:items-start    py-4 h-24 w-[250px] sm:[280px]  md:w-auto lg:w-auto">
            <img src={Logo} className="w-52 md:w-44 lg:w-52"></img>
            {/* <p className="mt-3 text-[#727581]">
              &copy; 2023 Pro Bono Zone&trade;
             
              <br />
              All Rights Reserved{" "}
            </p> */}
            {/* <div className="flex flex-row  space-x-2 w-6   ml-[-50px] lg:ml-[0px] mt-2">
              <img src={FaceBookWhite}></img>
              <img src={LinkedinWhite}></img>
              <img src={YoutubeWhite}></img>
            </div> */}
          </div>
          <div className="py-4 h-56 w-[250px] sm:[280px] mb-12  md:w-auto lg:w-auto text-[#727581]">
            <h1 className="font-semibold text-lg">Website</h1>
            <p className="mt-3">Home</p>
            <p className="mt-3">About</p>
            <p className="mt-3">FAQ</p>
            <p className="mt-3">Sponsors</p>
            <p className="mt-3">Contact</p>
          </div>

          <div className=" py-4 h-56   w-[250px] sm:[280px]  md:w-auto lg:w-auto text-[#727581]">
            <h1 className="font-semibold text-lg">Legal</h1>
            <p className="mt-3">Terms of Service</p>
            {/* <p className="mt-3">Legal</p> */}
            <p className="mt-3">Privacy Policy</p>
            <p className="mt-3 text-[#727581]">
              &copy; 2023 Pro Bono Zone&trade;
              <br />
            </p>
            <p className="mt-3 text-[#727581]">All Rights Reserved </p>
          </div>

          <div className=" flex flex-col items-center md:items-start  text-[#727581]  py-4 h-56   w-[250px] sm:[280px]  md:w-auto lg:w-auto">
            <h1 className="font-semibold text-lg">Connect</h1>
            <div className="flex  flex-row  items-center flex-wrap mt-4 text-[#727581]">
              <p className=" flex  flex-col  items-center justify-center w-4  ">
                <img src={Email}></img>
              </p>
              <p className="ml-2  text-md">contact@probonozone.com </p>
            </div>
            {/* <div className="flex  flex-row items-center flex-wrap mt-4">
              <p className=" flex  flex-col items-center justify-center w-4  ">
                <img src={PhoneIcon}></img>
              </p>
              <p className="ml-2 text-[#727581] text-sm">+1 987 654 3210 </p>
            </div> */}

            <div className="flex  flex-row items-center flex-wrap mt-4">
              <p className=" flex  flex-col items-center justify-center w-4  ">
                <img src={LocationIcon}></img>
              </p>
              <p className="ml-2 text-[#727581] text-md">
                Salt Lake City, Utah.{" "}
              </p>
            </div>
            <div className="flex flex-row md:ml-2 space-x-2 w-6 ml-[-50px]   lg:ml-[0px] mt-5">
              <img src={FaceBookWhite}></img>
              <img src={LinkedinWhite}></img>
              <img src={YoutubeWhite}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
