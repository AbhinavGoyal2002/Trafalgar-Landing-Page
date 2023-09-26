import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-14 justify-between items-center navbar bg-white">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px] ml-28" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 bg-white">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-mulish font-light cursor-pointer text-[16px] opacity-100 ${
              active === nav.title
                ? " text-[#1E1534] opacity-100"
                : " text-[#8F8A99] "
            } ${index === navLinks.length - 1 ? "mr-28" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end mr-3  items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-mulish font-medium cursor-pointer bg-white text-[18px] ${
                  active === nav.title ? "text-black" : "text-blue"
                } mb-4`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
