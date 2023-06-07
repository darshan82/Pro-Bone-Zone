import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { GENERAL_NAV_BAR, USER_NAV_BAR } from "../../constants";
import { useLocation } from 'react-router-dom';

export default function navbar({ handleClick })
{
  const [isNavOpen, setIsNavOpen] = useState(false);
  let navigation = useNavigate()
  const { pathname } = useLocation();
  return (
    <>
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
            {

              pathname !== "/list" ?
                <React.Fragment>
                  {
                    GENERAL_NAV_BAR.map((values, index) =>
                    {
                      return (
                        <Link to={values?.url}
                          onClick={() => setIsNavOpen(!isNavOpen)}

                        >
                          <p className="cursor-pointer text-[#414141] text-center my-2 block">
                            {values?.name}
                          </p>
                        </Link>

                      )
                    })
                  }
                  <div className="flex justify-center ">
                    <button
                      onClick={() =>
                      {
                        setIsNavOpen(!isNavOpen)

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
                        setIsNavOpen(!isNavOpen)

                        navigation("/")
                        handleClick()
                      }}

                      className="bg-[#f8f9fd] border  border-[#414141] text-[#EC672C] px-8 py-2 rounded-md cursor-pointer">
                      Login
                    </button>
                  </div>

                </React.Fragment>
                :
                <React.Fragment>
                  {
                    USER_NAV_BAR.map((values, index) =>
                    {
                      return (
                        <Link to={values?.url}
                          onClick={() => setIsNavOpen(!isNavOpen)}

                        >
                          <p className="cursor-pointer text-[#414141] text-center my-2 block">
                            {values?.name}
                          </p>
                        </Link>

                      )
                    })
                  }
                </React.Fragment>

            }
          </div>
        )}
      </nav >

      <nav className="hidden md:flex md:flex-row md:justify-between md:items-center md:px-16 md:py-3 lg:flex lg:flex-row lg:justify-between lg:items-center  lg:pl-44 bg-[#EAEFF8] lg:pt-9  ">
        <div className="">
          <Link to={"/"}>
            <img src={Logo} className="w-60" alt="logo" />
          </Link>

        </div>

        <div className="flex flex-row justify-center items-center space-x-5 text-white text-sm ">
          {
            USER_NAV_BAR.filter(value => value?.url == pathname).length === 0
              ?
              <React.Fragment>
                {
                  GENERAL_NAV_BAR.map((values, index) =>
                  {
                    return (
                      <Link to={values?.url} key={index + values?.name}>
                        <p className="cursor-pointer text-[#414141]">{values?.name}</p>
                      </Link>
                    )
                  })
                }
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
              </React.Fragment>
              :
              <React.Fragment>
                {
                  USER_NAV_BAR.map((values, index) =>
                  {
                    return (
                      <Link to={values?.url} key={index + values?.name}>
                        <p className="cursor-pointer text-[#414141]">{values?.name}</p>
                      </Link>
                    )
                  })
                }
              </React.Fragment>

          }
        </div>
      </nav>
    </>
  );
}
