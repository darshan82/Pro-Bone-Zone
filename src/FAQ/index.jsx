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
import ArrowRight from "../assets/ArrowRight.png";
import Logo from "../assets/Logo.png";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
const videId = "vD8X8qvhRxQ";

const faqData = [
  {
    question: 'Is Pro Bono Zone™ a law firm?',
    answer: 'Pro Bono Zone™ is not a law firm, nor are we owned by any law firm. Our third-party status allows us to be independent in judgment and highly selective in our choice of attorneys.',
  },
  {
    question: 'Are these consultations really free?',
    answer: 'Yes, they are absolutely free. There is no catch, and nothing to sign up for.',
  },
  {
    question: 'Is this an online event?',
    answer: 'No. Pro Bono Zone™ events are conducted live and in person.',
  },
  {
    question: 'Am I required to attend a group presentation?',
    answer: 'No. These sessions are private, one-on-one consultations in which you will receive highly personalized advice from a local attorney.',
  },
  {
    question: 'How long will my session be?',
    answer: 'You have 30 minutes to talk with your assigned attorney. To be fair to all participants we do need to keep the appointments moving along. However, in practice, the caliber of attorneys we work with are very accommodating and flexible. So, for example, if you need 35 minutes to work through a thorny issue, you will be able to do so.',
  },
  {
    question: 'When should I arrive?',
    answer: 'We strongly recommend that you arrive a full 15 minutes ahead of your scheduled time. That will give you the opportunity to relax and gather your thoughts and prepare your questions. There is one other reason to come early: now and then the person ahead of you may only need 10-15 minutes to have all their questions answered — in which case you will be invited in ahead of schedule.',
  },
  {
    question: 'Can we retain an attorney at this event?',
    answer: 'Our mission is to encourage and empower people to explore their legal options. That is why we host at a neutral venue and at zero cost. That is our exclusive focus. However, now and then the situation mentioned above does occur; and yes, that is allowed within our system. Finding the RIGHT attorney, i.e. someone we can relate to and feel we can trust is a significant part of making progress legally. So if you connect well, and the timing is right for you, we will not interfere with the relationship you have built.',
  },
  {
    question: 'Can I return a second time?',
    answer: 'Pro Bono Zone™ is not meant to be an ongoing free legal service for individuals. Think of it more as a jumpstart. However, depending on your circumstances, it may be possible to have a second free consultation. Pro Bono Zone™ is expanding nationwide. We host as many events in each area as possible. However, we cannot guarantee future events in each area. Talk with an event staff member for more information about your locality.',
  },
  {
    question: 'Do I need to select an area of interest?',
    answer: 'Yes, when you register for an event, we highly recommend that select a legal area of interest (e.g. immigration, family law, business, etc.). Different attorneys tend to specialize in specific areas of the law. Yes, it is true many lawyers are knowledgeable on a variety of topics; however, by talking to someone who has expertise in your particular area of interest, you are more likely to get the best possible advice.',
  },
  {
    question: 'How did  Pro Bono Zone™ start? ',
    answer: 'Pro Bono Zone™ is the brainchild of Kevin Cannon and SarahAnne Pryor. Their personal experiences led them to the conclusion that there were many people who could benefit greatly from a service like this. You can read their story in the "About" section.',
  },
];

export default function index()
{
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) =>
  {
    if (activeIndex === index)
    {
      setActiveIndex(null);
    } else
    {
      setActiveIndex(index);
    }
  };
  document.title = "FAQ"

  return (
    <>
      <div className="bg-[#EAEFF8] pt-2 pb-5">
        {/* <Navbar /> */}
        {/* Hero Section */}

        <div className="flex flex-col  ml-10  md:ml-20 lg:ml-44  sm:ml-10 sm:justify-center md: items-start justify-center ">
          <h1 
           className=" text-[#2E5FB7] font-inter font-semibold text-3xl leading-10 w-full mb-5"
        //  className="text-center  text-[#2E5FB7] sm:text-center md:text-center lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5"
          //className="text-[#2E5FB7] ml-4 md:text-left lg:text-left font-inter font-bold md:text-[27px] text-[23px] md:text-3xl lg:text-[40px] leading-10 lg:w-[450px]  my-1 mb-5 lg:pt-5 sm:ml-4 "
          >
           Frequent Questions 
          </h1>
          <div className="flex flex-row items-center mt-8 mb-12 ml-0 md:ml-0 ">
            <h2 className="text-md ">Home</h2>
            <img src={ArrowRight} alt="Arrow Right" className="mx-3" />
            <h2 className="text-md ">FAQ</h2>
          </div>
          {/* <div className=" flex flex-col-reverse  items-center lg:flex lg:flex-row lg:items-start    ">
            <div>
              <p className=" text-md text-[#414141] font-normal leading-5 mt-5 w-full px-16 lg:px-0   text-center lg:text-left  lg:w-[500px]  ">
                Confronting important legal matters can be a daunting task. Pro
                Bono Zone&trade; connects you with seasoned attorneys and
                empowers you to explore your options in a safe, private and
                supportive environment. And it is FREE!
              </p>
              <div className="  flex flex-row justify-center  lg:justify-start mt-14">
               
                <Button
                  buttonText={"Schedule a Free Consultation"}
                  onClick={handleClick}
                />
              </div>
            </div>

            <img
              src={HeroImage}
              className="hidden lg:block md:block md: w-[500px] lg:w-[35%] mt-5 lg:ml-[60px] lg:mt-[-35px]"
              // className=" w-[500px] lg:w-[35%] mt-5 lg:ml-[60px] lg:mt-[-35px]"
            ></img>
            <img
              src={HeroImageLessBorder}
              className="sm:block sm:w-[500px] md:hidden lg:hidden"
            />
          </div> */}
        </div>


        {/* <div className="lg:ml-44  ">
        <h1 className="text-[#2E5FB7] ml-4 md:text-center lg:text-left font-inter font-semibold md:text-[27px] text-[23px] md:text-3xl lg:text-5xl leading-10 lg:w-[450px] w-full my-1 mb-5 lg:pt-5 sm:ml-4 lg:ml-16">
  A Smart Solution
</h1>
<div className="flex flex-row items-center mt-8 mb-12 ml-4 md:ml-4 lg:ml-16">
  <h2 className="text-md">FAQ</h2>
  <img src={ArrowRight} alt="Arrow Right" className="mx-3" />
  <h2 className="text-md">Solutions</h2>
</div>
        
        </div> */}
      </div>

      {/* How its work Section */}

      {/* Solution Boxes */}


      {/* A Smart Solution */}
      <div className="bg-white p-2 pr-5 lg:pr-9 lg:ml-44">
  <div className="max-w-2xl mb-10">
    {faqData.map((faq, index) => (
      <div key={index} className="border-b border-gray-300 py-4">
        <button
          className="flex justify-start items-center w-full focus:outline-none"
          onClick={() => toggleAccordion(index)}
        >
          <h3 className="text-lg font-medium text-left">
            {faq.question}
          </h3>
          <div className={`ml-3 transition-transform ${
            activeIndex === index ? 'transform rotate-0' : 'transform rotate-180'
          }`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
        {activeIndex === index && (
          <p className="mt-4 text-gray-600">{faq.answer}</p>
        )}
      </div>
    ))}
  </div>
</div>


      {/* <div className=" bg-white p-2   pr-5 lg:pr-9 lg:ml-44">
        <div className="max-w-2xl  mb-10 ">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <button
                className="flex justify-start w-full focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-left">
                  {faq.question}
                </h3>
                <div className="mt-0">
                  <svg

                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-9 w-9 transition-transform ${activeIndex === index ? 'transform rotate-90' : ''
                      }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}



       
        </div>

      </div> */}

      {/* Offer Boxes */}


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
            <Link to={'/'}>
            <p className="mt-3">Home</p>
            </Link>
            <Link to={'/about'}>
            <p className="mt-3">About</p>
            </Link>
            <Link to={'/faq'}>
            <p className="mt-3">FAQ</p>
            </Link>
            <Link to={'/solution'}>
            <p className="mt-3">Sponsors</p>
            </Link>
            <p className="mt-3">Contact</p>
          </div>

          <div className=" py-4 h-56   w-[250px] sm:[280px]  md:w-auto lg:w-auto text-[#727581]">
            <h1 className="font-semibold text-lg">Legal</h1>
            <Link to={'/terms'}>
              <p className="mt-3">Terms of Service</p>
            </Link>
            {/* <p className="mt-3">Legal</p> */}
            <Link to={"/privacy"}>
              <p className="mt-3">Privacy Policy</p>
            </Link>

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
