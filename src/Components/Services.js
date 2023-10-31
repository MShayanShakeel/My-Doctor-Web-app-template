import React from "react";
import { icon1, icon2, icon3 } from "../Assets/index";

const Services = () => {
  return (
    <div className="w-full h-auto ml-28 mt-5 bg-white">
      <div className="grid grid-cols-3 divide-x bg-white border-gray-800 shadow">
        <div className="h-auto w-52 items-center">
          <div className="w-full ml-10">
            <img
              className="w-10 h-10 items-center object-cover"
              src={icon1}
              alt="icon1"
            />
            <h1 className="font-semibold h-5 ml-0 mt-5">Emergency Case</h1>
            <h2>________</h2>
            <h3 className="mt-5 text-gray-400">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </h3>
          </div>
        </div>
        <div className="h-auto w-52 items-center">
          <div className="w-full ml-10">
            <img
              className="w-10 h-10 items-center object-cover"
              src={icon2}
              alt="icon2"
            />
            <h1 className="font-semibold h-5 ml-0 mt-5">Online Appoinment</h1>
            <h2>________</h2>
            <h3 className="mt-5 text-gray-400">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </h3>
          </div>
        </div>
        <div className="h-auto w-52 items-center">
          <div className="w-full ml-10">
            <img
              className="w-10 h-10 items-center object-cover"
              src={icon3}
              alt="icon3"
            />
            <h1 className="font-semibold h-5 ml-0 mt-5 border-black">
              Cancer Care
            </h1>
            <h2>________</h2>
            <h3 className="mt-5 text-gray-400">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
