import React from "react";
import table from "../../assets/images/table.png";

const Feature = () => {
  return (
    <section>
      <div className="flex flex-col-reverse items-center justify-center md:flex-row">
        <div className="flex flex-wrap flex-col items-start justify-center gap-6 px-6">
          <div class="flex flex-wrap flex-col items-start gap-2">
            <h2 class="text-4xl font-bold capitalize">Relax, You're home!</h2>
            <p class="max-w-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              dolore voluptatem dolores optio sed ut rem, libero expedita quam
              ex.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              similique tempora minima eaque cum libero voluptatibus ex!
              Voluptates, corrupti ducimus.
            </p>
          </div>
          <a
            class="flex py-2 px-6  gap-2 shadow-xl bg-yellow-600 rounded-md font-bold capitalize hover:bg-red-600 hover:text-white text-1xl"
            href="/"
          >
            <span class="flex">Sign Up</span>
          </a>
        </div>
        <div>
          <img src={table} alt="table" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
