import styles from "../style";
import { element, robot } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex sm:flex-row flex-col  bg-white `}>
      <img
        src={element}
        alt="billing"
        className="sm:w-16 sm:h-20 md:w-20 md:h-24 hidden sm:block"
      />
      <div
        className={`sm:w-2/5 w-full flex ${styles.flexCenter} flex-col items-start sm:items-center lg:ml-24`}
      >
        <div className="flex flex-col text-center sm:text-left w-[80%] sm:w-full ">
          <h1 className="sm:block font-mulish font-bold text-[32px] md:text-[42px] text-black leading-[100.8px]  w-full mt-24 text-justify sm:text-left flex flex-col items-center justify-center gap-1 ">
            Virtual healthcare
          </h1>
          <h1 className="sm:block font-mulish font-bold text-[32px] md:text-[42px] text-black leading-[20.8px]  w-full mt-0 text-justify sm:text-left flex flex-col items-center justify-center gap-1 ">
            for you
          </h1>
        </div>

        <div className="text-center sm:text-left w-[80%] sm:w-full ">
          <p className="font-mulish md:w-[90%] sm:w-[70%] mt-12 mb-2 text-[#7D7987] xs:text-[18px] md:text-[18px] text-[16px] font-light">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
        </div>

        <div className="mt-4 font-mulish self-center sm:self-start">
          <button className="btn btn-primary bg-blue-500 text-white rounded-3xl p-3 hover:scale-105 duration-1000  px-8">
            Consult Today
          </button>
        </div>
      </div>

      <div
        className={` sm:w-1/2 md:w-3/5 w-full flex flex-col ${styles.flexCenter} md:my-0 my-10 sm:mr-15 lg:20 mr-5 `}
      >
        <img
          src={robot}
          alt="bill"
          className="md:w-[90%] sm:w-[100%]  w-[70%] h-auto "
        />
      </div>
    </section>
  );
};

export default Hero;
