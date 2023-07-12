import React, { useContext, useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { GENERAL_NAV_BAR, USER_NAV_BAR, navBar } from "../../constants";
import { useLocation } from 'react-router-dom';
import { UserContext } from "../../context/UserContext";
export default function navbar({ general = false })
{
  const [isNavOpen, setIsNavOpen] = useState(false);
  let navigation = useNavigate()
  const { pathname } = useLocation();
  const { loggedIn, logout, user } = useContext(UserContext)


  const handleLogout = () =>
  {
    logout()
    setTimeout(() =>
    {
      navigation("/")
    }, 500)
  }

  const handleLink = ()=>{
    setTimeout(()=>{
      navigation("/",{state:{contact:"contact"}})
    },100)
  }
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

              !loggedIn && general ?
                <React.Fragment>
                  {
                    GENERAL_NAV_BAR.map((values, index) =>
                    {
                      return (
                        <Link to={values?.url}
                          onClick={() =>
                          {
                            setIsNavOpen(!isNavOpen)
                            if (values?.name === "Contact")
                            {
                              handleLink()
                            }
                          }}

                        >
                          <p className="cursor-pointer text-[#414141] text-center my-2 block">
                            {values?.name}
                          </p>
                        </Link>

                      )
                    })
                  }
                </React.Fragment>
                :
                <React.Fragment>
                  {
                    user?.permit && navBar(user?.permit).map((values, index) =>
                    {
                      return (
                        <Link to={values?.url}
                          onClick={() =>
                          {
                            setIsNavOpen(!isNavOpen)


                          }}


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
            !loggedIn && general
              ?
              <React.Fragment>
                {
                  GENERAL_NAV_BAR.map((values, index) =>
                  {
                    return (
                      <Link
                        onClick={() =>
                        {

                          if (values?.name === "Contact")
                          {
                           handleLink()
                          }
                        }}
                        to={values?.url} key={index + values?.name}>
                        <p className="cursor-pointer text-[#414141]">{values?.name}</p>
                      </Link>
                    )
                  })
                }
              </React.Fragment>
              :
              <React.Fragment>
                {
                  user?.permit &&
                  navBar(user.permit).map((values, index) =>
                  {
                    return (
                      <>
                        {values.subNav ?
                          (<div className="dropdown relative inline-block">
                            <span className="cursor-pointer text-[#414141]">{values.name}</span>
                            <div className=" dropdownContent hidden absolute bg-gray-100 max-w-[100px] shadow-md p-2 z-10" >
                              {
                                values.subNav.map((item) => (

                                  <Link to={item.url}>
                                    <p onClick={item.name === "Logout" ? handleLogout : ""} className="cursor-pointer text-[#414141]">{item.name}</p>
                                  </Link>
                                ))
                              }
                            </div>
                          </div>)
                          :
                          <Link to={values?.url} key={index + values?.name}>
                            <p className="cursor-pointer text-[#414141]">{values?.name}</p>
                          </Link>
                        }
                      </>
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
