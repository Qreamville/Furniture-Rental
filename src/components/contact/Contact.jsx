import React from "react";
import { FaDownload } from "react-icons/fa";
import Lamp from "../../assets/images/lamp.png";
import App from "../../assets/images/app.svg";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto mt-20 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-10 gap-y-8 relative overflow-hidden">
        <div className="flex flex-col items-center justify-start md:mb-48 w-3/4">
          <img src={Lamp} alt="lamp" />
          <a
            href="/"
            className="flex py-2 px-6  my-12 gap-2 shadow-xl bg-yellow-600 rounded-md font-bold items-center hover:bg-red-600 hover:text-white text-1xl"
          >
            <FaDownload />
            <span>Download App Now</span>
          </a>
          <img
            src={App}
            alt="app"
            className="hidden md:block w-[240px] drop-shadow-xl absolute -bottom-[48%] max-w-[16rem] xl:max-w-xs"
          />
        </div>
        <form className="relative border-4 border-neutral-700 p-6 rounded-lg grid gap-8  md:max-w-lg my-4 md:my-12 lg:my-16  w-full">
          <h2 className="font-bold text-3xl">Contact Us</h2>
          <div className="relative">
            <input
              type="text"
              className="peer w-full border-4 rounded-md border-yellow-600 focus:outline-none placeholder-transparent"
            />
            <label
              placeholder="your name"
              className="peer-focus:text-yellow-600 text-black text-sm font-bold uppercase absolute -top-4 left-2  -translate-y-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2
              backdrop:transition-all peer-placeholder-shown:text-black"
            >
              Enter name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              className="peer w-full border-4 rounded-md border-yellow-600 focus:outline-none placeholder-transparent"
            />
            <label
              placeholder="your name"
              className="peer-focus:text-yellow-600 text-black text-sm font-bold uppercase absolute -top-4 left-2  -translate-y-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2
              transition-all peer-placeholder-shown:text-black"
            >
              Enter Mail
            </label>
          </div>
          <div className="relative">
            <textarea
              name="content"
              id=""
              cols="20"
              rows="5"
              className="peer w-full border-4 rounded-md border-yellow-600 focus:outline-none placeholder-transparent resize-none"
              placeholder="enter message"
            ></textarea>
            <label
              placeholder="your name"
              className="peer-focus:text-yellow-600 text-black text-sm font-bold uppercase absolute -top-3 left-2  -translate-y-1/2"
            >
              Enter Message
            </label>
          </div>
          <a
            className="flex py-2 px-6  gap-2 shadow-xl bg-yellow-600 w-max rounded-md font-bold capitalize hover:bg-red-600 hover:text-white text-1xl"
            href="/"
          >
            <span className="flex">Sign Up</span>
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
