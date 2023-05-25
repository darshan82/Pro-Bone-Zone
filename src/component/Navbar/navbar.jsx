import React, { useState } from "react";
// import Logo from '../../assets/Group6.png'
import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function navbar({ handleClick })
{
  const [isNavOpen, setIsNavOpen] = useState(false);
  let navigation = useNavigate()

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="bg-[#EAEFF8]  py-4 md:hidden ">
        <div className="flex justify-between px-6">
          <div>
            <Link to={"/"}>
              <img src={Logo} className="w-52 " alt="logo" />
            </Link>

          </div>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="flex items-center  text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current text-[#EC672C]"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
              />
            </svg>
          </button>
        </div>
        {isNavOpen && (
          <div className="px-6 pt-3 ">
            <Link to={"/"}>
              <p className="cursor-pointer text-[#414141] text-center my-2 block">
                Home
              </p>
            </Link>
            <Link to={'/about'}>
              <p className="cursor-pointer text-[#414141] text-center my-2 block">
                About
              </p>
            </Link>
            <Link to={'/faq'}>
              <p className="cursor-pointer text-[#414141] text-center my-2 block">
                FAQ
              </p>
            </Link>
            <Link to={'/solution'}>
              <p className="cursor-pointer text-[#414141] text-center my-2 block">
                Sponsors
              </p>
            </Link>
            <p className="cursor-pointer text-[#414141] text-center my-2 block">
              Contact
            </p>
            <div className="flex justify-center ">
              <button
                onClick={() =>
                {
                  navigation("/")
                  handleClick()
                }}
                className="bg-[#EC672C] px-8 py-2 w-44 rounded-sm text-white my-2 block">
                Register
              </button>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() =>
                {
                  navigation("/")
                  handleClick()
                }}

                className="bg-[#f8f9fd] border  border-[#414141] text-[#EC672C] px-8 py-2 rounded-md cursor-pointer">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:flex-row md:justify-between md:items-center md:px-16 md:py-3 lg:flex lg:flex-row lg:justify-between lg:items-center  lg:pl-44 bg-[#EAEFF8] lg:pt-9  ">
        <div className="">
          <Link to={"/"}>

            <img src={Logo} className="w-60" alt="logo" />
          </Link>

        </div>
        <div className="flex flex-row justify-center items-center space-x-5 text-white text-sm ">
          <Link to={"/"}>
            <p className="cursor-pointer text-[#414141]">Home</p>
          </Link>
          <Link to={"/about"}>
            <p className="cursor-pointer text-[#414141]">About</p>
          </Link>
          <Link to={"/faq"}>
            <p className="cursor-pointer text-[#414141]">FAQ</p>
          </Link>
          <Link to={'/solution'}>
            <p className="cursor-pointer text-[#414141]">Sponsors</p>
          </Link>
          <p className="cursor-pointer text-[#414141]">Contact</p>
          <button
            onClick={() =>
            {
              navigation("/")
              handleClick()
            }}

            className="bg-[#f8f9fd] border  border-[#414141] text-[#EC672C] px-8 py-2 rounded-md cursor-pointer">
            Login
          </button>
          <button
            onClick={() =>
            {
              navigation("/")
              handleClick()
            }}

            className="bg-[#EC672C] px-8 py-2 rounded-sm">
            Register
          </button>
        </div>
      </nav>
    </>
    //     <>
    //     <div className='sm:flex sm:flex-row sm:justify-between sm:items-center sm:px-6 sm:py-3 md:hidden'>
    //   <div className=''>
    //     <img src={Logo} className='w-16'></img>
    //   </div>
    //   <button className='flex items-center text-white focus:outline-none'>
    //     <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
    //       <path
    //         fill-rule='evenodd'
    //         clip-rule='evenodd'
    //         d='M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z'
    //       />
    //     </svg>
    //   </button>
    // </div>

    //     <div className='hidden sm:hidden md:flex md:flex-row md:justify-between md:items-center md:px-16 md:py-3 lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-16 lg:py-3 '>
    //     <div className=''>
    //       <img src={Logo} className='w-20'></img>
    //     </div>
    //     <div className='flex flex-row justify-center items-center space-x-5 text-white text-sm '>
    //       <p className='cursor-pointer'>Home</p>
    //       <p className='cursor-pointer'>About us</p>
    //       <p className='cursor-pointer'>FAQ</p>
    //       <p className='cursor-pointer'>Sponcers</p>
    //       <p className='cursor-pointer'>Contact</p>
    //       <button className='border border-white px-8 py-2 rounded-sm cursor-pointer'>Login</button>
    //       <button className='bg-[#4270FF] px-8 py-2 rounded-sm'>Register</button>
    //     </div>
    //     </div>
    //     </>
  );
}
