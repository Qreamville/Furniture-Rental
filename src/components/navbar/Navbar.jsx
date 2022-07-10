import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/images/logo.svg";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const onclick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* Large Screen Navbar */}
      <nav className="bg-yellow-600 hidden sm:block shadow-md rounded-b-md md:shadow-2xl shadow-yellow-600">
        <a
          href="/"
          className="block md:hidden w-full hover:opacity-75 transition-opacity cursor-pointer"
        >
          <img src={Logo} alt="logo" className="w-72" />
        </a>
        <div className="container mx-auto py-4">
          <ul className="flex flex-row w-full justify-between relative items-center">
            <li className="flex gap-6 font-semibold">
              <a href="#home" className="cursor-pointer">
                HOME
              </a>
              <a href="#contact" className="cursor-pointer">
                CONTACT
              </a>
            </li>
            <li className="hover:opacity-75 transition-opacity hidden md:block">
              <a href="/" className="">
                <img src={Logo} alt="logo" className="w-64" />
              </a>
            </li>
            <li className="flex gap-6 font-semibold">
              <a
                href="#login"
                className="py-2 px-4 hover:opacity-75 transition-opacity md:mr-4 bg-red-500 text-white rounded-md cursor-pointer"
              >
                LOGIN
              </a>
              <a
                href="#signup"
                className="py-2 px-4 hover:opacity-75 transition-opacity bg-black text-white rounded-md cursor-pointer"
              >
                SIGN UP
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="block sm:hidden bg-yellow-600">
        <div className="flex  items-center justify-between container mx-auto py-4">
          <a href="/">
            <img src={Logo} alt="logo" className="w-32" />
          </a>

          <BiMenu onClick={onclick} className="cursor-pointer text-4xl" />
        </div>
        <div
          className={`${
            toggle ? "active" : ""
          } navbar-links bg-yellow-600 container mx-auto`}
        >
          <BiX onClick={onclick} className="ml-auto cursor-pointer text-4xl" />
          <ul className=" flex flex-col w-full justify-between relative items-center gap-6 font-semibold pt-24">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li className="mb-4">
              <a
                href="#login"
                className="py-3 px-16 hover:opacity-75 transition-opacity md:mr-4 bg-red-500 text-white rounded-md cursor-pointer"
              >
                LOGIN
              </a>
            </li>
            <li>
              <a
                href="#sign up"
                className="py-3 p-14 hover:opacity-75 transition-opacity bg-black text-white rounded-md cursor-pointer"
              >
                SIGN UP
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
