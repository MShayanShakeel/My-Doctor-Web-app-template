import React from 'react'
// import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
// import Register from '../Pages/Register';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-p[1px] border-b-gray-100">
    <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        
        <div>
            <Link to= "/">
            <h1 className="font-bold text-blue-950 text-justify w-10 h-10">MedicalRecov</h1>
            </Link> </div>
        <div>
            <ul className="flex items-center gap-8">
                <li className="text-base text-blue-300 font-semibold hover:text-orange-900 cursor-pointer duration-150
                hover:underline underline-offset-2 decoration-[1px]">
                    Home
                </li>
                <li className="text-base text-blue-300 font-semibold hover:text-orange-900 cursor-pointer duration-150
                hover:underline underline-offset-2 decoration-[1px]">
                    Product
                </li>
                <li className="text-base text-blue-300 font-semibold hover:text-orange-900 cursor-pointer duration-150
                hover:underline underline-offset-2 decoration-[1px]">
                    Pricing
                </li>
                <li className="text-base text-blue-300 font-semibold hover:text-orange-900 cursor-pointer duration-150
                hover:underline underline-offset-2 decoration-[1px]">
                    Contact
                </li>
                <button className="bg-red-500 text-white mt-2 ml-4 py-1 px-8 hover:bg-red-800
      duration-300 rounded-md">Login</button>
      {/* <Router>
        <Routes>
            <Route  path="/Register"><Register /> </Route>
            <button className="bg-red-500 text-white mt-2 py-1 px-8 hover:bg-red-800
      duration-300 rounded-md">SingIn</button>
        </Routes>
      </Router> */}
   <Link to = "/register">
      <button className="bg-red-500 text-white mt-2 py-1 px-8 hover:bg-red-800
      duration-300 rounded-md">SingIn</button>
      </Link>
   



            </ul>
        </div>
    </div>
    </div>
  )
}

export default Header
