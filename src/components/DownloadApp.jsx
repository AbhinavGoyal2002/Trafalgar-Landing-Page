import styles from "../style";
import { robot3, Rectangle } from "../assets";

const DownloadApp = () => {
  return (
    <section id="home" className={`flex sm:flex-row flex-col  bg-white `}>
      <div
        className={`sm:w-1/2 w-full flex ${styles.flexCenter} flex-col sm:items-start lg:mr-24 sm:pl-20 md:pl-64`}
      >
        <div className="flex flex-col  text-center sm:text-left w-[80%] sm:w-full ">
          <h1 className="sm:block font-mulish font-bold text-[32px] md:text-[32px] text-black leading-[70.8px] w-full sm:mt-20 text-justify sm:text-left flex flex-col items-center justify-center gap-1 ">
            Download our
          </h1>
          <h1 className="sm:block font-mulish font-bold text-[32px] md:text-[32px] text-black leading-[20.8px]  w-full mt-0 text-justify sm:text-left flex flex-col items-center justify-center gap-1 ">
            mobile apps
          </h1>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:text-left w-[100%] sm:w-full text-center">
          <img
            src={Rectangle}
            alt="rect"
            className="w-16 h-[0.5%] mb-10 mt-10 "
          />
          <p className="font-mulish md:w-[100%] sm:w-[70%] mb-2 text-[#7D7987] xs:text-[16px] md:text-[16px] text-[16px] font-thin">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
        </div>

        <div className="flex flex-col  items-center mt-8 sm:items-start sm:text-left w-full sm:w-auto mb-1">
          <button class="relative group overflow-hidden pl-6 h-14 flex items-center rounded-3xl bg-white border-2  border-blue-500 text-blue-500 font-mulish">
            <span class="relative uppercase text-base ">Download</span>
            <div
              aria-hidden="true"
              class="w-14 bg-white transition duration-300 -translate-y-7 group-hover:translate-y-7"
            >
              <div class="h-14 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 m-auto fill-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="h-14 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 m-auto fill-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div
        className={` sm:w-1/2 md:w-1/2 w-full flex flex-col ${styles.flexCenter} md:my-0 my-10 sm:mr-16 lg:20 mr-5 `}
      >
        <img
          src={robot3}
          alt="bill"
          className="md:w-[90%] sm:w-[100%]  w-[70%] h-auto pt-12"
        />
      </div>
    </section>
  );
};

export default DownloadApp;
