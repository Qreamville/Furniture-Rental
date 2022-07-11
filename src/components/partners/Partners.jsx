import React from "react";
import {
  spotify,
  cisco,
  deezer,
  dell,
  disney,
  texas,
  verizon,
} from "../../assets/images";

const Partners = () => {
  return (
    <section className="bg-black text-center">
      <div className="container mx-auto text-white flex flex-col items-center justify-center gap-8 py-10">
        <h2 className="text-4xl font-bold capitalize text-yellow-600 p-4">
          Our Partners
        </h2>
        <p className="w-full max-w-lg text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque
          iusto accusamus consequuntur nulla? Dolores quasi nobis aut temporibus
          ipsum?
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto py-12">
          <div className="p-4 bg-white shadow-md rounded-md">
            <img src={spotify} alt="spotify" className="h-20 w-20" />
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <img src={dell} alt="dell" className="h-20 w-20" />
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <img src={cisco} alt="cisco" className="h-20 w-20" />
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <img src={disney} alt="disney" className="h-20 w-20" />
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <img src={deezer} alt="deezer" className="h-20 w-20" />
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <img src={verizon} alt="verizon" className="h-20 w-20" />
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <img src={texas} alt="texas" className="h-20 w-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
