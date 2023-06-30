

import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import Email from "../assets/email.png";
import LocationIcon from "../assets/Locationicon.png";
import FaceBookWhite from "../assets/FaceBookWhite.png";
import LinkedinWhite from "../assets/LinkedinWhite.png";
import YoutubeWhite from "../assets/YoutubeWhite.png";


const Footer = () =>
{
    return (
        <div className="bg-[#061133] p-2">
            <div
                className="flex flex-row flex-wrap justify-center items-center text-center pt-16 md:text-left lg:text-left md:flex-row  md:justify-between md:items-start lg:flex-row lg:items-start lg:justify-between lg:w-[80%]  lg:ml-44 py-5 lg:pb-28"
            >
                <div className="text-white flex flex-col items-center md:items-start  lg:items-start    py-4 h-24 w-[250px] sm:[280px]  md:w-auto lg:w-auto">
                    <img src={Logo} className="w-52 md:w-44 lg:w-52"></img>
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
                    <Link to={'/sponsor'}>
                        <p className="mt-3">Sponsors</p>
                    </Link>
                    {/* <p className="mt-3">Contact</p> */}
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
                    <div className="flex  flex-row items-center flex-wrap mt-4">
                        <p className=" flex  flex-col items-center justify-center w-4  ">
                            <img src={LocationIcon}></img>
                        </p>
                        <p className="ml-2 text-[#727581] text-md">
                            Salt Lake City, Utah.{" "}
                        </p>
                    </div>
                    <div className="flex flex-row md:ml-2 space-x-2 w-6 ml-[-50px]   lg:ml-[0px] mt-5">
                        {/* <div > */}
                        <img
                            onClick={() =>
                            {
                                window.open("https://www.facebook.com/probonozone", "_blank");
                            }}
                            src={FaceBookWhite}></img>
                        {/* </div> */}

                        <img
                            onClick={() =>
                            {
                                window.open("https://www.linkedin.com/company/pro-bono-zone", "_blank");
                            }}
                            src={LinkedinWhite}></img>
                        <img
                            onClick={() =>
                            {
                                window.open("https://www.youtube.com/@ProBonoZone", "_blank");
                            }}
                            src={YoutubeWhite}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer