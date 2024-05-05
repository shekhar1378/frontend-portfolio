import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closedMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed w-full bg-zinc-900 text-white md:px-16 px-4 py-6 flex justify-between items-center shadow-xl z-50">
      <h1 className="text-[1.4rem] font-bold tracking-wider cursor-pointer">Shekhar</h1>

      <ul className="md:flex font-semibold items-center hidden gap-10 text-[1rem] cursor-pointer ">
        <li className="hover:text-zinc-600">
          <ScrollLink to="hero" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className="hover:text-zinc-600">
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li className="hover:text-zinc-600">
          <ScrollLink to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </li>
        <li className="hover:text-zinc-600">
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>

      <div onClick={() => toggleMenu()} className="md:hidden">
        <LuMenu
          className={` h-8 w-8 ${isOpen ? "hidden" : "block"}`}
          onClick={() => toggleMenu()}
        />
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute inset-0 transition-all duration-[0.3] ease-in-out`}
      >
        <IoClose
          className={`${
            isOpen ? "block" : "hidden"
          } h-8 w-8 absolute  flex top-[2rem] right-[2rem] `}
          onClick={() => toggleMenu()}
        />
        <div className="mobile-menu bg-zinc-900 flex flex-col items-center justify-center h-screen gap-10">
          <ul className="list-none text-center  ">
            <li className="py-4">
              <ScrollLink
                className=" text-white text-[1.6rem] "
                to="hero"
                smooth={true}
                duration={500}
                onClick={() => closedMenu()}
              >
                Home
              </ScrollLink>
            </li>
            <li  className="py-4">
              <ScrollLink
                onClick={() => closedMenu()}
                className=" text-white text-[1.6rem] "
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </ScrollLink>
            </li>
            <li  className="py-4">
              <ScrollLink
                onClick={() => closedMenu()}
                className=" text-white text-[1.6rem]"
                to="projects"
                smooth={true}
                duration={500}
              >
                Projects
              </ScrollLink>
            </li>
            <li  className="py-4">
              <ScrollLink
                onClick={() => closedMenu()}
                className=" text-white text-[1.6rem]"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
