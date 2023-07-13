import { useState } from "react";

import { close, firsttext, logo, menu, largelogo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleNavLinkClick = (id) => {
    setActive(id);
    window.location.assign(`/#${id}`);
  };

  return (
<nav className="fixed left-0 top-0 z-10 bg-white w-full flex justify-between items-center navbar">
  
      <a href="/" className="ml-2" >
  <img src={largelogo} alt="first construction" className="w-[200px] h-[100px] ml-5" />
  {/* <img src={firsttext} alt="first construction" className="w-[200px] h-[30px]" /> */}

</a>


      <ul className="list-none sm:flex hidden justify-end items-center flex-1 pr-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-black" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => handleNavLinkClick(nav.id)}
            >
              <a href={`/#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center mr-2 bg-white">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain bg-white"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-dimBlack"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => handleNavLinkClick(nav.id)}
                >
                  <a href={`/#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
