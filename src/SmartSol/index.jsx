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
import Star from "../assets/Star.png";
import { Link } from "react-router-dom";
const videId = "vD8X8qvhRxQ";
export default function index() {
  const formRef = useRef(null);
  const form = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [chooseDate, setSelectedDate] = useState("Sat June 17th");
  const handleChangeEventDate = (event) =>
    setSelectedDate(event?.target?.value);
  const handleClick = () => {
    formRef.current.focus();
    formRef.current.scrollIntoView();
  };
  const sendEmail = (e) => {
    e.preventDefault();
    //console.log(e.target);

    // const formData = new FormData(form.current);
    // const formValues = Object.fromEntries(formData);

    // // Do something with the form values
    // console.log(formValues);
    if (
      form.current.firstName.value &&
      form.current.lastName.value &&
      form.current.email.value &&
      form.current.phone.value &&
      form.current.type.value &&
      form.current.time.value &&
      form.current.description.value
    )
      emailjs
        .sendForm(
          "service_m7tcc4g",
          "template_ty2kqgc",
          form.current,
          "2Z-yhu6rbMDiGx-KA"
        )
        .then(
          (result) => {
            alert(
              "Your registration request has been received successfully. Thank you"
            );
            form.current.firstName.value = null;
            form.current.lastName.value = null;
            form.current.email.value = null;
            form.current.phone.value = null;
            form.current.description.value = null;
            form.current.type.value = "Select a Category";
            form.current.time.value = "Select a Time";
          },
          (error) => {
            console.log(error.text);
          }
        );
    else {
      alert("Please fill the complete form. Thank you");
    }
  };
  return (
    <>
      <div className="bg-[#EAEFF8] pt-4 pb-5">
        {/* <Navbar /> */}
        {/* Hero Section */}
        <div className="flex flex-col  ml-10  md:ml-20 lg:ml-44  sm:ml-10 sm:justify-center md: items-start justify-center ">
          <h1 
           className=" text-[#2E5FB7] font-inter font-semibold text-3xl leading-10 w-full mb-5"
        //  className="text-center  text-[#2E5FB7] sm:text-center md:text-center lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5"
          //className="text-[#2E5FB7] ml-4 md:text-left lg:text-left font-inter font-bold md:text-[27px] text-[23px] md:text-3xl lg:text-[40px] leading-10 lg:w-[450px]  my-1 mb-5 lg:pt-5 sm:ml-4 "
          >
          A Smart Solution 
          </h1>
          <div className="flex flex-row items-center mt-8 mb-12 ml-0 md:ml-0 ">
            <h2 className="text-md ">Home</h2>
            <img src={ArrowRight} alt="Arrow Right" className="mx-3" />
            <h2 className="text-md ">Solution</h2>
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

      </div>
      <div className=" py-0 px-4 md:px-24   md:py-10 lg:px-2 lg:py-10">
        <div className=" flex  flex-col items-center justify-center lg:ml-44 sm:flex-col md:flex-row md:justify-start  md:items-center lg:flex-row lg:items-center lg:justify-start ">
          <div className=" sm:w-full md:w-[50%] lg:w-[50%] ">
            <h1 className="text-2xl text-[#414141] font-bold text-center mt-2 md:text-left lg:text-left lg:text-3xl ">
              A Smart Solution
            </h1>
            <p className="mt-8 text-[#414141]">
              Fear is a formidable opponent. But we have the power to change our
              trajectory. Pro Bono Zone gives you a convenient way to get
              valuable insights into your circumstances in a private and safe
              environment. Any legal issue can be covered in your FREE 30-minute
              consultation. You deserve an opinion. We offer the following at a
              neutral venue:
            </p>
            <div className=" w-72 sm:w-96 md:w-96 lg:w-96 mt-6   flex flex-row justify-between ">
              <div className="space-y-2">
                <div className="flex  flex-row items-center flex-wrap  ">
                  <img src={Star} className="p-1 "></img>
                  {/* <p className=" flex  flex-col items-center justify-center  bg-white  text-white text-2xl  w-4 h-4 rounded-lg ">
                    <img src={Star} className="p-1 w-40 h-40"></img>
                  </p> */}
                  <p className="ml-2 text-[#414141] text-xs md:text-lg lg:text-lg">
                    Experience
                  </p>
                </div>
                <div className="flex  flex-row items-center flex-wrap  ">
                  <img src={Star} className="p-1 "></img>
                  {/* <p className=" flex  flex-col items-center justify-center  bg-[#2E5FB7]  text-white text-2xl  w-4 h-4 rounded-lg ">
                    <img src={Tick} className="p-1"></img>
                  </p> */}
                  <p className="ml-2 text-[#414141] text-xs md:text-lg lg:text-lg">
                    Competence{" "}
                  </p>
                </div>
                <div className="flex  flex-row items-center flex-wrap  ">
                  <img src={Star} className="p-1 "></img>
                  {/* <p className=" flex  flex-col items-center justify-center  bg-[#2E5FB7]  text-white text-2xl  w-4 h-4 rounded-lg ">
                    <img src={Tick} className="p-1"></img>
                  </p> */}
                  <p className="ml-2 text-[#414141] text-xs md:text-lg lg:text-lg">
                    Privacy{" "}
                  </p>
                </div>
                <div className="flex  flex-row items-center flex-wrap  ">
                  <img src={Star} className="p-1 "></img>
                  {/* <p className=" flex  flex-col items-center justify-center  bg-[#2E5FB7]  text-white text-2xl  w-4 h-4 rounded-lg ">
                    <img src={Tick} className="p-1"></img>
                  </p> */}
                  <p className="ml-2 text-[#414141] text-xs md:text-lg lg:text-lg">
                    Sensitivity{" "}
                  </p>
                </div>
              </div>

              {/* <div className="space-y-2">
                <div className="flex  flex-row items-center flex-wrap  ">
                  <p className=" flex  flex-col items-center justify-center  bg-[#2E5FB7]  text-white text-2xl  w-4 h-4 rounded-lg ">
                    <img src={Tick} className="p-1"></img>
                  </p>
                  <p className="ml-2 text-[#414141] text-xs md:text-lg lg:text-lg">
                    Sensitivity{" "}
                  </p>
                </div>
                <div className="flex  flex-row items-center flex-wrap  ">
                  <p className=" flex  flex-col items-center justify-center  bg-[#2E5FB7]  text-white text-2xl  w-4 h-4 rounded-lg ">
                    <img src={Tick} className="p-1"></img>
                  </p>
                  <p className="ml-2 text-[#414141] text-xs md:text-lg lg:text-lg">
                    Affordability (It’s free!)
                  </p>
                </div>
              </div> */}
            </div>
            <p className="mt-6 text-[#414141]">
              Ten minutes with a law student at a "free legal aid" community
              clinic is fine if you want to understand who inherits grandma's
              furniture, but if you need to take care of something important or
              potentially life-changing, consult with a competent professional.
              It's free.
            </p>
            <div className=" flex justify-center mt-5 md:mt-8  md:justify-start lg:mt-8 lg:justify-start ">
              {/* <Button
                buttonText={"Schedule a Free Consultation"}
                onClick={handleClick}
              /> */}
            </div>{" "}
            <h1 className="text-2xl text-[#414141] font-bold text-center mt-2 md:text-left lg:text-left lg:text-3xl ">
              This is subtitle
            </h1>
            <p className="mt-8 text-[#414141]">
              Fear is a formidable opponent. But we have the power to change our
              trajectory. Pro Bono Zone gives you a convenient way to get
              valuable insights into your circumstances in a private and safe
              environment. Any legal issue can be covered in your FREE 30-minute
              consultation. You deserve an opinion. We offer the following at a
              neutral venue:
            </p>
            <p className="mt-8 text-[#414141]">
              Fear is a formidable opponent. But we have the power to change our
              trajectory. Pro Bono Zone gives you a convenient way to get
              valuable insights into your circumstances in a private and safe
              environment. Any legal issue can be covered in your FREE 30-minute
              consultation. You deserve an opinion. We offer the following at a
              neutral venue:
            </p>
          </div>
          <div className="ml-0  w-full md:w-[40%] md:ml-3 mt-4 lg:w-[40%] flex flex-col justify-center items-center lg:ml-8  ">
            {/* <img
              src={YourSolutionImage}
              className="w-[250px] h-[250px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]  "
            ></img> */}
          </div>
        </div>
      </div>
      {/* <div className="bg-white p-2 pr-5 lg:pr-9 lg:ml-44">
       <h1 className="my-4 text-5xl font-bold text-[#414141]">A Smart Solution</h1>
      </div> */}
      {/* How its work Section */}
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
