import React from "react";
import { Rectangle, Frame2, element2, element3 } from "../assets";
import { articleContent } from "../constants";

const Articles = () => {
  return (
    <section
      className="flex-auto"
      style={{
        backgroundImage: `url(${Frame2})`,
        backgroundSize: "30% auto",
        backgroundPosition: "right 60%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${element2})`,
          backgroundSize: "8% auto",
          backgroundPosition: "15% 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-mulish font-bold ss:text-[32px] text-[30px] text-black ss:leading-[100.8px] leading-[75px] mb-0 mt-24">
            Check out our latest article
          </h1>
          <img src={Rectangle} alt="rect" className="w-15 h-[100%]" />
        </div>
        <div className="flex items-center justify-center mt-16">
          <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
            {articleContent.map((box, index) => (
              <div
                key={box.id}
                className="bg-white text-black flex flex-col hover:scale-110 duration-1000 justify-center gap-5 font-semibold text-left rounded-2xl shadow-md w-72 h-[398px] pb-10"
              >
                <img src={box.icon} className="w-50 rounded-t-2xl" />
                <p className="text-left font-mulish font-bold text-[18px] pl-6 pr-6">
                  {box.title}
                </p>
                <p className="text-left font-mulish font-extralight text-[14px] opacity-50 mr-8 pl-6">
                  {box.content}
                </p>
                <button
                  variant="text"
                  className="flex items-center gap-2 pl-6 text-blue-500 text-left font-mulish font-normal"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 sm:items-center sm:text-left w-full sm:w-auto">
          <button className="bg-white border-2 border-blue-500 text-blue-500 font-mulish rounded-3xl p-3 hover:bg-blue-500 hover:text-white hover:scale-105 duration-1000 px-12">
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
