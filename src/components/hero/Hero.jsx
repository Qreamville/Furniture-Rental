import React from "react";
import "./hero.css";
import couch from "../../assets/images/couch.png";
import app from "../../assets/images/app.svg";

const Hero = () => {
  return (
    <header className=" bg-gradient-to-b from-yellow-600 to-yellow-400 pt-16 md:pt-24 lg:pt-36">
      <div className="container mx-auto relative">
        <img src={couch} alt="couch" className="couch-img absolute" />
        <img
          src={app}
          alt="app"
          className="app-image w-40 sm:w-52 md:w-64 lg:w-72 absolute "
        />
      </div>
    </header>
  );
};

export default Hero;
