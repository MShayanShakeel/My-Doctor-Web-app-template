import React from "react";
import { doctor1, doctor2, doctor3, doctor4 } from "../Assets/index";

const Ourteam = () => {
  return (
    <div className="w-full h-auto mt-24">
      <div className="relative">
        <h1 className="w-full h-auto text-center text-3xl text-blue-950 font-bold mb-28 underline">
          Our Team
        </h1>
      </div>
      <div className="grid grid-cols-4 mt-10 ml-5 mr-3 gap-4 border-r-4 border-red-100 bg-white items-center">
        <div>
          <img
            className="w-72 h-64 rounded-2xl border-spacing-2"
            src={doctor1}
            alt="doctor1"
          />
          <h1 className="text-center cursor-pointer font-semibold text-lg mr-8 text-blue-950 mt-4">
            Julian Jameson
          </h1>
        </div>
        <div>
          {" "}
          <img className=" w-72 h-64 rounded-2xl" src={doctor2} alt="doctor2" />
          <h1 className="text-center cursor-pointer font-semibold text-lg mr-8 text-blue-950 mt-4">
            Julian Jameson
          </h1>
        </div>
        <div>
          {" "}
          <img className="w-72 h-64 rounded-2xl" src={doctor3} alt="doctor3" />
          <h1 className="text-center cursor-pointer font-semibold text-lg mr-8 text-blue-950 mt-4">
            Julian Jameson
          </h1>
        </div>
        <div>
          {" "}
          <img className="w-72 h-64 rounded-2xl" src={doctor4} alt="doctor4" />
          <h1 className="text-center cursor-pointer font-semibold text-lg mr-8 text-blue-950 mt-4">
            Julian Jameson
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
