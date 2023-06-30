import React, { useEffect } from "react";
import ArrowRight from "../assets/ArrowRight.png";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar/navbar";

export default function index()
{
  useEffect(() =>
  {
    window.scrollTo(0, 0)
  }, [])

  document.title = "Sponsors"

  return (
    <>
            <Navbar general={true}/>

      <div className="bg-[#EAEFF8] pt-4 pb-5">
        {/* <Navbar /> */}
        {/* Hero Section */}
        <div className="flex flex-col  ml-10  md:ml-20 lg:ml-44  sm:ml-10 sm:justify-center md: items-start justify-center ">
          <h1
            className=" text-[#2E5FB7] font-inter font-semibold text-3xl leading-10 w-full mb-5"
          //  className="text-center  text-[#2E5FB7] sm:text-center md:text-center lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5"
          //className="text-[#2E5FB7] ml-4 md:text-left lg:text-left font-inter font-bold md:text-[27px] text-[23px] md:text-3xl lg:text-[40px] leading-10 lg:w-[450px]  my-1 mb-5 lg:pt-5 sm:ml-4 "
          >
            Sponsors
          </h1>
          <div className="flex flex-row items-center mt-8 mb-12 ml-0 md:ml-0 ">
            <h2 className="text-md ">Home</h2>
            <img src={ArrowRight} alt="Arrow Right" className="mx-3" />
            <h2 className="text-md ">Sponsors</h2>
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
      <h1 className="text-center text-[#414141] sm:text-center sm:text-3xl md:text-center lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-3xl leading-10  lg:w-[450px] w-full  my-1 mb-5 lg:pt-5 pr-5 lg:pr-9 lg:ml-44 pl-1">
        Our Generous Sponsors
      </h1>
      <div className="bg-white p-2 mb-5  pr-5 lg:pr-9 lg:ml-44">
        <div className=" mx-auto text-left">
          <p className="text-gray-700 text-lg leading-relaxed pb-10">
            Pro Bono Zone™ events have proven to be a tremendous and often life-changing benefit to many people. These events could not come to fruition without the time, talents, input and generous support of many partners in the community —including attorneys, corporate promoters, venues, and many more. We thank those who have contributed so much to give back.
          </p>




        </div>
      </div>
      <Footer />

    </>
  );
}
