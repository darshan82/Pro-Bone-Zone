import React, { useEffect, } from "react";
import ArrowRight from "../assets/ArrowRight.png";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar/navbar";

export default function index()
{
  document.title = "About"
  useEffect(() =>
  {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Navbar general={true}/>

      <div className="bg-[#EAEFF8] pt-3 pb-2">
        <div className="flex flex-col  ml-10  md:ml-20 lg:ml-44  sm:ml-10 sm:justify-center md: items-start justify-center ">
          <h1
            className=" text-[#2E5FB7] font-inter font-semibold text-3xl leading-10 w-full mb-5"
          >
            About
          </h1>
          <div className="flex flex-row items-center mt-8 mb-12 ml-0 md:ml-0 ">
            <h2 className="text-md ">Home</h2>
            <img src={ArrowRight} alt="Arrow Right" className="mx-3" />
            <h2 className="text-md ">About</h2>
          </div>
        </div>


      </div>



      <h1 className="text-center text-[#414141] sm:text-center sm:text-3xl md:text-center lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-3xl leading-10  lg:w-[450px] w-full  my-1 mb-5 lg:pt-5 pr-5 lg:pr-9 lg:ml-44 pl-1">
        Your Story is Our Story
      </h1>
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

          <p className="mt-4 text-gray-700 text-lg font-semibold mt-10 mb-14">
            Kevin Cannon,
            SarahAnne Prior
          </p>
        </div>
      </div>
      <div className="bg-[#061133] p-2">
        <Footer />

      </div>
    </>
  );
}
