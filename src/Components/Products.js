import React from "react";
import { product1, product2, product3 } from "../Assets/index";

const Products = () => {
  return (
    <div className="w-full h-auto bg-gray-200 mt-28">
      <div className="w-full ml-20 h-auto ">
        <h2 className="font-semibold text-red-600 mb-4">Practice Advice</h2>
        <h1 className="h-5 font-extrabold items-center mb-4 tracking-wider justify-center text-3xl w-full mt-3 text-blue-950">
          Our Department
        </h1>
        <h3 className="mt-8 text-gray-400 w-96">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </h3>
      </div>
      <div className="ml-2 mr-2 mt-20 grid grid-cols-3 divide-x bg-gray-200 border-gray-800 shadow gap-3">
        <div className="bg-white w-auto">
          <img className=" w-96 ml-4 h-72 rounded-sm mt-1" src={product1} alt="product1" />
          <h2 className="w-auto font-semibold text-red-500 mt-4 ml-3">Painless procedures</h2>
          <h1 className="w-auto font-bold text-blue-950 mt-3 ml-3 text-xl">Quick examination</h1>
          <h3 className="text-gray-400 w-64 mt-3 ml-3">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </h3>
          <button className="bg-transparent border-r-8 border-blue-950 mb-10 text-red-500 border-solid font-semibold mt-3 ml-4 py-1 px-8 hover:bg-red-800 
      duration-300 rounded-2xl">Learn More </button>
        </div>
        <div className="bg-white w-auto">
          <img className="w-96 ml-4 h-72 rounded-sm mt-1" src={product2} alt="product2" />
          <h2 className="w-auto font-semibold text-red-500 mt-4 ml-3">Cancer Care</h2>
          <h1 className="w-auto font-bold text-blue-950 mt-3 ml-3 text-xl">Online Appoinment</h1>
          <h3 className="text-gray-400 w-64 mt-3 ml-3">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </h3>
          <button className="bg-transparent border-r-8 border-blue-950 mb-10 text-red-500 border-solid font-semibold mt-3 ml-4 py-1 px-8 hover:bg-red-800 
      duration-300 rounded-2xl">Learn More </button>
        </div>
        <div className="bg-white w-auto">
          <img className="w-96 ml-4 h-72 rounded-sm mt-1" src={product3} alt="product3" />
          <h2 className="w-auto font-semibold text-red-500 mt-4 ml-3">Best dental surgeons</h2>
          <h1 className="w-auto font-bold text-blue-950 mt-3 ml-3 text-xl">Emergency Case</h1>
          <h3 className="text-gray-400 w-64 mt-3 ml-3">
          We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.
          </h3>
          <button className="bg-transparent border-r-8 border-blue-950 mb-10 text-red-500 border-solid font-semibold mt-3 ml-4 py-1 px-8 hover:bg-red-800 
      duration-300 rounded-2xl">Learn More </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
