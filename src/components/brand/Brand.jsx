import React from "react";
import { FaDownload, FaKey, FaPaypal, FaLightbulb } from "react-icons/fa";
import Dots from "../../assets/images/dots.svg";

const Brand = () => {
  return (
    <section className="relative overflow-hidden mb-20">
      <img
        src={Dots}
        alt="dots"
        className="absolute -left-14 top-96 hidden md:block"
      />
      <img
        src={Dots}
        alt="dots"
        className="absolute top-96 -right-14 hidden md:block"
      />
      <div className="container mx-auto mt-36 sm:mt-64">
        <button className="w-full flex justify-center">
          <a
            href="/"
            className="flex items-center gap-2 justify-center bg-yellow-600 shadow-xl rounded-md py-2 px-6 text-xl font-semibold hover:text-white hover:bg-red-600"
          >
            <FaDownload /> <span>Download The App</span>
          </a>
        </button>
        <div className="flex mt-32 flex-col sm:flex-row gap-y-14">
          <div className="grid gap-4 justify-items-center text-center md:flex-1 ">
            <div className="rounded-full border-8 border-yellow-600 p-4">
              <FaKey size={30} />
            </div>
            <h3 className="text-2xl font-bold">Safe</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              facilis?
            </p>
          </div>
          <div className="grid gap-4 justify-items-center text-center md:flex-1 ">
            <div className="rounded-full border-8 border-yellow-600 p-4">
              <FaPaypal size={30} />
            </div>
            <h3 className="text-2xl font-bold">Easy Payments</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              facilis?
            </p>
          </div>
          <div className="grid gap-4 justify-items-center text-center md:flex-1 ">
            <div className="rounded-full border-8 border-yellow-600 p-4">
              <FaLightbulb size={30} />
            </div>
            <h3 className="text-2xl font-bold">Anytime</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              facilis?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
