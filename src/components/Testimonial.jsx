import React, { useState } from "react";
import { RectangleW, ed, element, element3 } from "../assets";
import "./Testimonial.css"; // Import the custom CSS

const card_info = [
  {
    id: 0,
    title: "What our customers are saying",
    profileImage: ed,
    name: "Edward Newgate",
    position: "Founder Circle",
    content: `Our dedicated patient engagement app and web portal allow you to
    access information instantaneously (no tedeous form, long calls, or
    administrative hassle) and securely`,
  },
  {
    id: 1,
    title: "What our customers are saying",
    profileImage: ed,
    name: "Obama Newgate",
    position: "Founder Circle",
    content: `Our dedicated patient engagement app and web portal allow you to
    access information instantaneously (no tedeous form, long calls, or
    administrative hassle) and securely`,
  },
  {
    id: 2,
    title: "What our customers are saying",
    profileImage: ed,
    name: "Samay Newgate",
    position: "Founder Circle",
    content: `Our dedicated patient engagement app and web portal allow you to
    access information instantaneously (no tedeous form, long calls, or
    administrative hassle) and securely`,
  },
  {
    id: 3,
    title: "What our customers are saying",
    profileImage: ed,
    name: "Abhinav Newgate",
    position: "Founder Circle",
    content: `Our dedicated patient engagement app and web portal allow you to
    access information instantaneously (no tedeous form, long calls, or
    administrative hassle) and securely`,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section
      className="flex flex-col gap-5 xs:items-center xs:justify-center mt-60 mb-32"
      style={{
        backgroundImage: `url(${element})`,
        backgroundSize: "5% auto",
        backgroundPosition: "11% 75%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-gradient-to-b   xs:items-center justify-center from-[#67C3F3] from-10% to-[#5B98F2] xs:h-96 h-[100%] xs:w-[70.5%] w-[100%] rounded-3xl flex flex-col items-center ">
        <div
          className="flex flex-col items-center justify-center bg-transparent"
          style={{
            backgroundImage: `url(${element3})`,
            backgroundSize: "10% auto",
            backgroundPosition: "100% 6%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col xs:items-center xs:justify-center  font-mulish font-bold sm:text-[32px] text-[15px] text-white sm:mt-24 mt-32">
            <h1>{card_info[currentIndex].title}</h1>
            <div className="flex items-center justify-center self-center xs:mt-6 mt-2 md:mb-14 mb-2 w-12 h-1">
              <img src={RectangleW} />
            </div>
          </div>
          <div className=" flex flex-row items-center justify-center">
            <div className="flex flex-row w-1/2 items-center justify-center">
              <div className=" w-[25%] h-[25%] bg-white rounded-full border-white border-4 flex sm:ml-0 ml-4 items-center justify-center">
                <img
                  src={card_info[currentIndex].profileImage}
                  className=" rounded-full"
                />
              </div>
              <div className="ml-6">
                <h1 className="text-white font-mulish sm:text-xl text-[15px] font-semibold">
                  {card_info[currentIndex].name}
                </h1>
                <h1 className="text-white font-mulish sm:text-[16px] text-[12px] font-extralight">
                  {card_info[currentIndex].position}
                </h1>
              </div>
            </div>
            <div className="flex w-1/2 items-center justify-center">
              <p className="text-white font-mulish font-extralight sm:text-[16px] text-[12px] mt-4 sm:w-[90%] pr-20">
                {card_info[currentIndex].content}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-10 text-black sm:mt-32 mt-40">
          <button
            onClick={() => {
              if (currentIndex === 0) {
                setCurrentIndex(card_info.length - 1);
              } else {
                setCurrentIndex(currentIndex - 1);
              }
            }}
          >
            <i className="ri-arrow-left-line" />
          </button>

          <div className="flex flex-row items-center gap-5">
            {card_info.map((item) => (
              <i
                class={
                  item.id === currentIndex ? "ri-circle-fill" : "ri-circle-line"
                }
              />
            ))}
          </div>

          <button
            onClick={() => {
              if (currentIndex === card_info.length - 1) {
                setCurrentIndex(0);
              } else {
                setCurrentIndex(currentIndex + 1);
              }
            }}
          >
            <i className="ri-arrow-right-line" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
