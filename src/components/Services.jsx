import React from "react";
import {
  Rectangle,
  Frame,
  element2,
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  element3,
} from "../assets";
import { boxContent } from "../constants";

const Services = () => {
  return (
    <section
      className="flex-auto"
      style={{
        backgroundImage: `url(${Frame})`,
        backgroundSize: "50% auto",
        backgroundPosition: "left 60%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-mulish font-bold ss:text-[32px] text-[30px] text-black ss:leading-[100.8px] leading-[75px] mb-0 mt-24">
          Our services
        </h1>
        <img src={Rectangle} alt="rect" className="w-15 h-[100%]" />
        <div className="flex flex-col items-center justify-center w-[80%] gap-1">
          <p className="font-mulish font-light ss:text-[16px] text-center mt-8 opacity-50">
            We provide the best choices for you. Adjust it to your health needs
            and make sure you undergo treatment.
          </p>
          <p className="font-mulish font-light ss:text-[16px] text-center opacity-50">
            With our highly qualified doctors, you can consult with us to
            determine which type of service is suitable for your health.
          </p>
        </div>
      </div>
      <div
        className="flex items-center justify-center mt-16"
        style={{
          backgroundImage: `url(${element2})`,
          backgroundSize: "10% auto",
          backgroundPosition: "89% 45%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {boxContent.map((box, index) => (
            <div
              key={box.id}
              className="bg-white p-4 text-black flex flex-col hover:scale-110 duration-1000 justify-center gap-5 font-semibold text-left rounded-2xl shadow-md w-80 h-[300px]"
            >
              <img src={box.icon} className="w-16" />
              <p className="text-left font-mulish font-semibold text-[24px]">
                {box.title}
              </p>
              <p className="text-left font-mulish font-extralight text-[15px] opacity-50 mr-14">
                {box.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mt-16 sm:items-center sm:text-left w-full sm:w-auto">
        <button className="bg-white border-2 border-blue-500 text-blue-500 font-mulish rounded-3xl p-3 hover:bg-blue-500 hover:text-white hover:scale-105 duration-1000 px-10">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Services;
