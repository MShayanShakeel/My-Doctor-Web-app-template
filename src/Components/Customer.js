import React from "react";

const Customer = () => {
  return (
    <div className="w-full h-auto ml-10 mt-28 bg-white">
      <div className="grid grid-cols-4 divide-x bg-white">
        <div className="h-auto w-52 items-center">
          <div className="w-full ml-10">
            <h1 className="font-extrabold text-5xl h-5 ml-7 justify-center mt-1 mb-16 text-blue-500">
              15K
            </h1>
            <h2 className="ml-7">Happy Customer</h2>
          </div>
        </div>
        <div className="h-auto w-52 items-center">
          <div className="w-full ml-10">
            <h1 className="font-extrabold text-5xl h-5 ml-7 justify-center mt-1 mb-16 text-blue-500">
              150K
            </h1>
            <h2 className="ml-7">MonthlyVisitors</h2>
          </div>
        </div>
        <div className="h-auto w-52 items-center">
          <div className="w-full ml-10">
            <h1 className="font-extrabold text-5xl h-5 ml-7 justify-center mt-1 mb-16 text-blue-500">
              15
            </h1>
            <h2 className="ml-7">Countries Worldwide</h2>
          </div>
        </div>
        <div className="h-auto w-52 items-center">
          <div className="w-full ml-10">
            <h1 className="font-extrabold text-5xl h-5 ml-7 justify-center mt-1 mb-16 text-blue-500">
              100+
            </h1>
            <h2 className="ml-7">Top Partners</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
