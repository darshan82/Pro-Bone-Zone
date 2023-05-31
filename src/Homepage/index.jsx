import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SolutionCard from "../component/SolutionCard/SolutionCard";
import Button from "../component/button/button";
import OfferCard from "../component/OfferCard/OfferCard";
import HeroImage from "../assets/Hero.png";
import HeroImageLessBorder from "../assets/HerolessBorder.png";
import Heading from "../assets/heading.png";
import YourSolutionImage from "../assets/YourSolution.png";
import YourAdvocate from "../assets/YourAdvocate.png";
import Location from "../assets/Location.png";
import Time from "../assets/Time.png";
import Date from "../assets/Date.png";
import TheProblem from "../assets/TheProblem.png";
import Model from "../assets/Model.png";
import Procrastination from "../assets/Procrastination.png";
import Solution from "../assets/Solution.png";
import Tick from "../assets/Tick.png";
import SmithJones from "../assets/SmithJones.png";
import McIntoshTronton from "../assets/McIntoshTronton.png";
import AyalaSmithDickens from "../assets/AyalaSmithDickens.png";
import YouTube from "react-youtube";
import Footer from "../component/Footer";
const videId = "vD8X8qvhRxQ";
export default function index({ formRef, handleClick })
{
  const form = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [chooseDate, setSelectedDate] = useState("Sat June 17th");
  const handleChangeEventDate = (event) =>
    setSelectedDate(event?.target?.value);

  const [disabled, setDisabled] = useState(false)
  useEffect(() =>
  {
    window.scrollTo(0, 0)
  }, [])
  const sendEmail = (e) =>
  {
    e.preventDefault();
    if (
      form.current.firstName.value &&
      form.current.lastName.value &&
      form.current.email.value &&
      form.current.phone.value &&
      form.current.type.value &&
      form.current.time.value &&
      form.current.description.value
    )
    {
      setDisabled(true)
      emailjs
        .sendForm(
          "service_m7tcc4g",
          "template_ty2kqgc",
          form.current,
          "2Z-yhu6rbMDiGx-KA"
        )
        .then(
          (result) =>
          {
            setDisabled(false)

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
          (error) =>
          {
            setDisabled(false)

            console.log(error.text);
          }
        );
    }
    else
    {
      alert("Please fill the complete form. Thank you");
    }
  };
  return (
    <>
      <div className="bg-[#EAEFF8] pt-2 pb-5">
        {/* Hero Section */}
        <div className="lg:ml-44  ">
          <h1 className="text-center  text-[#2E5FB7] sm:text-center md:text-center lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5  ">
            Connecting. Empowering. Elevating Lives.
          </h1>

          <div className=" flex flex-col-reverse  items-center lg:flex lg:flex-row lg:items-start    ">
            <div>
              <p className=" text-md text-[#414141] font-normal leading-5 mt-5 w-full px-16 lg:px-0   text-center lg:text-left  lg:w-[500px]  ">
                Confronting important legal matters can be a daunting task. Pro
                Bono Zone&trade; connects you with seasoned attorneys and
                empowers you to explore your options in a safe, private and
                supportive environment. And it is FREE!
              </p>
              <div className="  flex flex-row justify-center  lg:justify-start mt-14">
                {/* <button className="bg-[#2E5FB7]   py-4 px-9 text-white text-sm   rounded-lg">
                  Schedule a Free Consultation
                </button> */}
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
          </div>
        </div>
      </div>

      {/* How its work Section */}
      <div className=" py-6 md:py-6 lg:py-24 bg-[#2E5FB7] ">
        <div
          // className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto"
          className=" flex  flex-col   items-center justify-center   sm:flex-col md:flex-row md:justify-start md:items-start  lg:flex-row lg:justify-start md:ml-20 lg:ml-44 "
        >
          <div className="sm:w-[620px] md:w-[338px] lg:w-[450px] bg-black">
            <YouTube
              //  className=" max-h-96  max-w-sm"
              videoId={videId}
              controls={true}
              opts={{
                width: "100%",
                height: "400px",
              }}
              //  playsinline={true}
              onReady={() => setIsPlaying(true)}
            />
          </div>

          <div className="ml-0 md:ml-10 lg:ml-20  ">
            <h1 className="font-bold text-2xl pl-1 text-white mt-5 mb-5 ml-1">
              How It Works{" "}
            </h1>
            <li className="text-md mt-3 font-normal leading-5 pl-2 text-white">
              Select an available 30-minute time slot.
            </li>
            <li className="text-md mt-3 font-normal leading-5 pl-2 text-white">
              Choose your area of interest.
            </li>
            <li className="text-md mt-3 font-normal leading-5 pl-2 text-white">
              Prepare your legal questions{" "}
            </li>
            <li className="text-md mt-3 font-normal leading-5 pl-2 text-white">
              Arrive 15 minutes early.
            </li>
            <li className="text-md mt-3 font-normal leading-5 pl-2 text-white">
              Meet our friendly staff for orientation.
            </li>
            <li className="text-md mt-3 font-normal leading-5 pl-2 text-white">
              Consult with an experienced attorney
            </li>
            <li className="text-md mt-3 mb-5 font-normal leading-5 pl-2 text-white">
              Change your life!
            </li>
            <div className="mt-4"></div>
            <button
              className="bg-[#EC672C] py-4 px-9 text-white text-sm   rounded-lg"
              onClick={handleClick}
            >
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>
      {/* Solution Boxes */}
      <div className="flex flex-col py-7  bg-[#F0F4FF] ">
        <div className=" flex flex-col lg:ml-44 lg:w-[80%] my-6 ">
          <h1 className="text-[#414141] text-2xl font-bold text-center mx-2 sm:text-3xl md:text-3xl lg:text-2xl lg:mx-0 mb-10 ">
            Common Problems
          </h1>
          <div className="py-6  flex flex-row items-center justify-center   lg:justify-between flex-wrap ">
            <SolutionCard
              icon={TheProblem}
              heading={"ANXIETY"}
              para="Why do we hesitate to talk with an attorney? We are embarrassed.
            We fear judgement and insensitivity. We avoid change and commitment. We worry about the cost."
            />
            <SolutionCard
              icon={Procrastination}
              heading={"PROCRASTINATION"}
              para={
                "So what do we do? We put off potentially life-changing action and remain stuck indefinitely in an unresolved situation."
              }
            />
            <SolutionCard
              icon={Model}
              heading={"TRANSITION "}
              para="Finding an attorney that we can relate to and who has
            expertise in our
            area of need is crucial. There may be times when we need to make a switch."
            />
            <SolutionCard
              icon={Solution}
              heading={"EMERGENCY "}
              para=" There may also be times when a legal situation is thrust upon
            us suddenly and we don't know where to start or who to talk to."
            />
          </div>
        </div>
      </div>

      {/* A Smart Solution */}
      <div className=" py-0 px-4 md:px-4   md:py-10 lg:px-2 lg:py-10">
        <div className=" flex  flex-col items-center justify-center lg:ml-44 sm:flex-col md:flex-row md:justify-start  md:items-center lg:flex-row lg:items-center lg:justify-start ">
          <div className=" sm:w-full md:w-[50%] lg:w-[50%] ">
            <h1 className="text-2xl text-[#414141] font-bold text-center mt-2 md:text-left lg:text-left ">
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
                  <p className=" flex  flex-col items-center justify-center  bg-[#2E5FB7]  text-white text-2xl  w-4 h-4 rounded-lg ">
                    <img src={Tick} className="p-1"></img>
                  </p>
                  <p className="ml-2 text-[#414141] text-xs md:text-lg lg:text-lg">
                    Experience
                  </p>
                </div>
                <div className="flex  flex-row items-center flex-wrap  ">
                  <p className=" flex  flex-col items-center justify-center  bg-[#2E5FB7]  text-white text-2xl  w-4 h-4 rounded-lg ">
                    <img src={Tick} className="p-1"></img>
                  </p>
                  <p className="ml-2 text-[#414141] text-xs md:text-lg lg:text-lg">
                    Competence{" "}
                  </p>
                </div>
                <div className="flex  flex-row items-center flex-wrap  ">
                  <p className=" flex  flex-col items-center justify-center  bg-[#2E5FB7]  text-white text-2xl  w-4 h-4 rounded-lg ">
                    <img src={Tick} className="p-1"></img>
                  </p>
                  <p className="ml-2 text-[#414141] text-xs md:text-lg lg:text-lg">
                    Privacy{" "}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
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
              </div>
            </div>
            <p className="mt-6 text-[#414141]">
              Ten minutes with a law student at a "free legal aid" community
              clinic is fine if you want to understand who inherits grandma's
              furniture, but if you need to take care of something important or
              potentially life-changing, consult with a competent professional.
              It's free.
            </p>
            <div className=" flex justify-center mt-5 md:mt-8  md:justify-start lg:mt-8 lg:justify-start ">
              <Button
                buttonText={"Schedule a Free Consultation"}
                onClick={handleClick}
              />
            </div>{" "}
          </div>
          <div className="ml-0  w-full md:w-[40%] md:ml-3 mt-4 lg:w-[40%] flex flex-col justify-center items-center lg:ml-8  ">
            <img
              src={YourSolutionImage}
              className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]  "
            ></img>
          </div>
        </div>
      </div>

      <div className="  py-10 relative ">
        <img
          src={YourAdvocate}
          className="absolute -z-20 h-[100%] md:w-[100%] lg:[100%]"
        ></img>
        <h1 className="text-3xl text-white font-bold mt-4 text-center py-6 ">
          {" "}
          Your Advocate
        </h1>
        <p className=" text-center  text-white text-lg md:text-xl lg:text-xl mt-4 px-5 md:px-24 lg:px-64">
          Our vetting process ensures that your advocate will be a discrete and
          sensitive attorney from one of the most experienced firms who are
          committed to community service. You will have a full 30 minutes to
          discuss any legal questions on your mind.
        </p>
        <div className="   ">
          <div className="flex  flex-col items-center justify-center  sm:flex-col md:flex-row md:justify-between  md:items-center lg:flex-row lg:items-center lg:justify-between lg:w-[80%]  mt-8   lg:ml-44">
            <OfferCard
              image={SmithJones}
              name={"Smith Jones"}
              age={"39 years"}
              hours={"520 pro bono hours"}
              person={"Family Law"}
            />
            <OfferCard
              image={AyalaSmithDickens}
              age={"45 years"}
              name={"Ayala, Smith & Dickens"}
              hours={"290 pro bono hours"}
              person={"Immigration"}
            />
            <OfferCard
              image={McIntoshTronton}
              age={"32 years"}
              name={"McIntosh & Tronton"}
              hours={"1200 pro bono hours"}
              person={"Business Law"}
            />
          </div>
        </div>
      </div>

      <div
        className=" py-10 bg-slate-100  flex  flex-col justify-center items-center "
        ref={formRef}
      >
        <h1 className="text-2xl text-[#414141] font-bold mt-2 text-center py-6 ">
          Schedule A Consultation
        </h1>
        <p
          className="text-center  text-[#414141] text-lg md:text-xl lg:text-xl my-4 px-5 md:px-24 lg:px-64"
        >
          This event will last just 4 hours, so we have limited openings. If you
          need legal advice, don't delay. Take advantage of this opportunity to
          move forward. You owe it to yourself.
        </p>

        <div className="bg-[#ffff] px-4 py-4 md:py-10 md:px-16 lg:py-10 lg:px-16  w-[100%] md:w-[90%] lg:w-[70%] flex flex-col justify-center items-center sm:flex-col md:flex-row lg:flex-row">
          <div className="w-[100%] md:w-[50%] lg:w-[50%]  ">
            <h1 className="text-[#414141] font-bold text-2xl"> Event Info </h1>
            <div className="flex  flex-row items-center flex-wrap mt-4">
              <p className=" flex  flex-col items-center justify-center w-7  ">
                <img src={Date}></img>
              </p>
              <div className="flex  flex-col ">
                <p className="ml-2 text-[#414141] text-sm">Date </p>
                <p className="ml-2 text-[#061133] text-sm">
                  {chooseDate}
                  {/* Friday, June 23rd{" "} */}
                </p>
              </div>
            </div>
            <div className="flex  flex-row items-center flex-wrap mt-4 ">
              <p className=" flex  flex-col items-center justify-center  w-7 ">
                <img src={Time}></img>
              </p>
              <div className="flex  flex-col ">
                <p className="ml-2 text-[#414141] text-sm">Time </p>
                <p className="ml-2 text-[#061133] text-sm">10AM - 2PM.</p>
              </div>
            </div>{" "}
            <div className="flex  flex-row items-center flex-wrap mt-4">
              <p className=" flex  flex-col items-center justify-center w-7 ">
                <img src={Location}></img>
              </p>
              <div className="flex  flex-col ">
                <p className="ml-2 text-[#414141] text-sm">Location </p>
                <p className="ml-2 text-[#061133]  text-sm">
                  Keller Williams Office
                  <br />
                  998 North 1200 West
                  <br />
                  Orem, Utah 84057
                </p>
              </div>
            </div>


          </div>
          <div className="w-[100%] md:w-[50%] lg:w-[50%]  ">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col justify-center  md:flex-row lg:flex-row  flex-wrap  ">
                <select
                  name="date"
                  className="h-10  md:w-[184px] lg:px-3 lg:py-2 bg-gray-100 text-sm text-[#414141] rounded-sm m-2"
                  onChange={handleChangeEventDate}
                >
                  <option value="Sat, June 17th" disabled selected>
                    Select a Date
                  </option>
                  <option value="Sat, June 17th">Sat, June 17th</option>
                  <option value="Sat June 24th">Sat June 24th</option>
                </select>

              </div>
              <div className="flex flex-col justify-center  md:flex-row lg:flex-row  flex-wrap   ">
                <input
                  type="text"
                  className="py-2 px-3 bg-gray-100 text-sm text-[#414141] rounded-sm m-2 "
                  placeholder="First Name"
                  name="firstName"
                ></input>
                <input
                  type="text"
                  className="py-2 px-3 bg-gray-100  text-sm text-[#414141] rounded-sm m-2"
                  placeholder="Last Name"
                  name="lastName"
                ></input>
              </div>
              <div className="flex flex-col justify-center  md:flex-row lg:flex-row  flex-wrap  ">
                <input
                  type="text"
                  className="py-2 px-3 bg-gray-100  text-sm text-[#414141] rounded-sm m-2"
                  placeholder="Email"
                  name="email"
                ></input>
                <input
                  type="text"
                  className="py-2 px-3 bg-gray-100  text-sm text-[#414141] rounded-sm m-2"
                  placeholder="Phone"
                  name="phone"
                ></input>
              </div>

              <div className="flex flex-col justify-center flex-wrap   md:flex-row lg:flex-row">
                <select
                  name="type"
                  className="h-10  md:w-[184px] lg:px-3 lg:py-2 bg-gray-100 text-sm text-[#414141] rounded-sm m-2"
                >
                  <option value="" disabled selected>
                    Select a Category
                  </option>
                  <option value="family-law">Family Law</option>
                  <option value="business-law">Business Law</option>
                </select>

                <select
                  name="time"
                  className="h-10  md:w-[184px] lg:px-3 lg:py-2 bg-gray-100 text-sm text-[#414141] rounded-sm m-2"
                >
                  <option value="" disabled selected>
                    Select a Time
                  </option>

                  <option value="10:00">10:00 a.m.</option>
                  <option value="10:30">10:30 a.m.</option>
                  <option value="11:00">11:00 a.m.</option>
                  <option value="11:30">11:30 a.m.</option>
                  <option value="12:00">12:00 p.m.</option>
                  <option value="12:30">12:30 p.m.</option>
                  <option value="13:00">1:00 p.m.</option>
                  <option value="13:30">1:30 p.m.</option>
                </select>
              </div>

              <div className="flex flex-col justify-center md:flex-row lg:flex-row  flex-wrap  ">
                <textarea
                  name="description"
                  id=""
                  placeholder="How did you hear about Pro Bono Zone?"
                  className="bg-gray-100 p-4   md:w-96 lg:w-96 h-20 m-2"
                ></textarea>
              </div>
              <div className=" flex justify-center mt-3 md:justify-center lg:justify-center ">
                <button
                  type="submit"
                  disabled={disabled}
                  className="bg-[#EC672C] w-full  py-2 rounded-lg text-white text-sm mx-1 lg:mx-4 lg:w-96"
                >
                  Count Me In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#061133] p-2">
        <Footer />

      </div>
    </>
  );
}
