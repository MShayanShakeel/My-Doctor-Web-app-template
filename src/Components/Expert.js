import React from "react";
import { expert } from "../Assets/index";

const Expert = () => {
  return (
    <div className="w-full h-auto mt-28 bg-white items-center justify-center">
      <div className="grid grid-cols-2 divide-x bg-white border-gray-800 shadow">
        <div className="h-auto w-3/4 items-center">
          <div className="w-full ml-10">
            <h1 className="h-5 font-extrabold items-center tracking-wider justify-center text-3xl ml-12 w-full mt-5 text-blue-950">
              Meet Our Experts
            </h1>
            <h2 className="ml-12 w-full">________</h2>
            <h3 className="mt-5 text-gray-400 ml-12">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </h3>
            <h2 className="h-1 font-semibold ml-12 text-lg text-red-700 mt-10 cursor-pointer duration-100">Learn More </h2>
          </div>
        </div>
        <div className="h-auto w-3/4 items-center">
          <div className="w-full ml-10">
            <img className="h-auto rounded-2xl" src={expert} alt="expert" />
          </div>
        </div>
        <div className="h-auto w-52 items-center">
          <div className="w-full ml-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
