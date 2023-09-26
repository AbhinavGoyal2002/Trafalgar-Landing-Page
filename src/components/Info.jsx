import styles from "../style";
import { element, robot2, Rectangle } from "../assets";

const Info = () => {
  return (
    <section
      id="home"
      className={`flex sm:flex-row flex-col  bg-white mt-8 mb-8`}
      style={{
        backgroundImage: `url(${element})`,
        backgroundSize: "5% auto",
        backgroundPosition: "right 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={` sm:w-1/2 md:w-3/5 w-full flex flex-col justify-center items-center md:my-0 my-10 sm:ml-15  ml-5 sm:mb-40 mb-20`}
      >
        <img
          src={robot2}
          alt="bill"
          className="md:w-[75%] sm:w-[100%]  w-[70%] h-auto  mt-12"
        />
      </div>

      <div
        className={`sm:w-2/5 w-full flex ${styles.flexCenter} flex-col items-center sm:items-start lg:mr-24`}
      >
        <div className="flex flex-col  text-center sm:text-left w-[80%] sm:w-full pl-7">
          <h1 className="sm:block font-mulish font-bold text-[32px] md:text-[32px] text-black leading-[70.8px]  w-full sm:mt-52 text-justify sm:text-left flex flex-col items-center justify-center gap-1 ">
            Leading healthcare
          </h1>
          <h1 className="sm:block font-mulish font-bold text-[32px] md:text-[32px] text-black leading-[20.8px]  w-full mt-0 text-justify sm:text-left flex flex-col items-center justify-center gap-1 ">
            providers
          </h1>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-[80%] sm:w-full pl-7">
          <img src={Rectangle} alt="rect" className="w-16 h-[1%] mb-10 mt-10" />
          <p className="font-mulish md:w-[90%] sm:w-[70%] mb-2 text-[#7D7987] xs:text-[16px] md:text-[16px] text-[16px] font-thin">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
        </div>

        <div className="mt-8 self-center sm:self-start pl-7 mb-32">
          <button className="bg-white border-2  border-blue-500 text-blue-500 font-mulish rounded-3xl p-3 hover:bg-blue-500 hover:text-white hover:scale-105 duration-1000 px-10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Info;
