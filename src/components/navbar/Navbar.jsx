import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-yellow-600 py-5">
      <div className="container mx-auto">
        <ul className="flex flex-row w-full justify-between relative items-center">
          <li className="flex gap-6 font-semibold">
            <a href="#home" className="cursor-pointer">
              HOME
            </a>
            <a href="#contact" className="cursor-pointer">
              CONTACT
            </a>
          </li>
          <li className="">
            <a href="/">HomeSmart</a>
          </li>
          <li className="flex gap-6 font-semibold">
            <a href="#login" className="cursor-pointer">
              LOGIN
            </a>
            <a href="#signup" className="cursor-pointer">
              SIGN UP
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
