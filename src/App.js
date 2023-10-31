import React, { Children } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter  } from "react-router-dom";
export{
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
  RouterProvider,
}from "react-router-dom";


const Layout =()=>{
  return (
    <div className="App">
      <Header />
      <ScrollRestoration />
      < Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([{
  path : "/",
  element: <Layout />,
  children:[
    {
      path :"/",
      element :<Home />,
  },
  {
    path:"/register",
    element:<Register />
  },
  ],
},
]);
function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
  
      
    </div>
  );
}


export default App;
