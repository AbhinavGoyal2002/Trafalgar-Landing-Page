import React from "react";
import { logo, element3 } from "../assets";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-b from-[#67C3F3] from-10% to-[#5B98F2] flex xs:items-center xs:justify-center flex-col  mt-32 h-[450px]">
      <div
        className="flex flex-col items-center justify-center bg-transparent"
        style={{
          backgroundImage: `url(${element3})`,
          backgroundSize: "10% auto",
          backgroundPosition: "-4% 120%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex sm:flex-row flex-col  text-white xs:items-center xs:justify-center ">
          <div className="flex flex-col ml-32  ">
            <img src={logo} className="w-[25%] " />
            <p className="w-[80%] font-extralight mt-4  sm:text-[16px] text-[12px]">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <p className="mt-8 font-extralight  sm:text-[14px] text-[12px] sm:mb-0 mb-16 ">
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </div>

          <div className="flex sm:flex-col flex-row">
            <h2 className="text-lg  sm:mr-40 mr-44 mb-4">Company</h2>
            <p className=" font-extralight sm:text-[16px] text-[12px] sm:mb-3 mb-0 mr-2 sm:mr-0">
              About
            </p>
            <p className=" font-extralight sm:text-[16px] text-[12px] sm:mb-3 mb-0  mr-2 sm:mr-0">
              Testimonials
            </p>
            <p className=" font-extralight sm:text-[16px] text-[12px] sm:mb-3 mb-0  mr-2 sm:mr-0">
              Find a doctor
            </p>
            <p className=" font-extralight sm:text-[16px] text-[12px] sm:mb-3 mb-0  mr-2 sm:mr-0">
              Apps
            </p>
          </div>

          <div className="flex sm:flex-col flex-row">
            <h2 className="text-lg  sm:mr-36 mr-48 mb-4">Region</h2>
            <p className=" font-extralight sm:text-[16px] text-[12px] sm:mb-3 mb-0 mr-2 sm:mr-0">
              Indonasia
            </p>
            <p className=" font-extralight sm:text-[16px] text-[12px] sm:mb-3 mb-0 mr-2 sm:mr-0">
              Singapore
            </p>
            <p className=" font-extralight sm:text-[16px] text-[12px] sm:mb-3 mb-0 mr-2 sm:mr-0">
              Hongkong
            </p>
            <p className=" font-extralight sm:text-[16px] text-[12px] sm:mb-3 mb-0 mr-2 sm:mr-0">
              Canada
            </p>
          </div>

          <div className="flex sm:flex-col flex-row">
            <h2 className="text-lg sm:mr-60 mr-32 mb-4">Help</h2>
            <p className=" font-extralight sm:text-[16px] text-[12px] sm:mb-3 mb-0  mr-2 sm:mr-0">
              Help Center
            </p>
            <p className=" font-extralight sm:text-[16px] text-[12px] sm:mb-3 mb-0  mr-2 sm:mr-0">
              Contact support
            </p>
            <p className=" font-extralight sm:text-[16px] text-[12px] sm:mb-3 mb-0  mr-2 sm:mr-0">
              instructions
            </p>
            <p className=" font-extralight sm:text-[16px] text-[12px] sm:mb-3 mb-0  mr-2 sm:mr-0">
              How it works
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
