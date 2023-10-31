import React, {useState} from 'react'
import {BsArrowRightShort ,BsArrowLeftShort} from 'react-icons/bs';
import { SLD1 , SLD2 , SLD3 } from '../Assets/index'; 

const Banner = () => {
    //SLIDER ONE TO ANOTHER PICTURE 
      const [currentSlide , setcurrentSlide ]= useState(0)  
      const data = [ SLD1 , SLD2 , SLD3 ]; 
      const RightSlide=()=>{
          setcurrentSlide(currentSlide === 3 ? 0 :(prev)=> prev + 1) 
      };
      const LeftSlide =()=>{
          setcurrentSlide(currentSlide === 0 ? 3 :(prev)=> prev - 1)
      };
      console.log(currentSlide);
    return (
      <div className="w-full h-auto overflow-x-hidden">
        <div className="w-screen h-[650px] relative">
          <div style={{transform: `translateX(-${currentSlide * 100}vw)`}}
           className="w-[400vw] h-full flex transition-transform duration-1000">
              <img className="w-full h-full object-cover" src={data[0]} alt="SLD1" loading='priority' />
              <img className="w-full h-full object-cover" src={data[1]} alt="SLD2"  />
              <img className="w-full h-full object-cover" src={data[2]} alt="SLD3"  />
              </div>
              <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
              <div onClick={LeftSlide} className="w-14 h-12 border-[1px] bg-white border-gray-700 flex items-center justify-center
               hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 
               diration-300 ">
         <BsArrowLeftShort />
             </div>
             <div onClick={RightSlide} className="w-14 h-12 border-[1px] bg-white border-gray-700 flex items-center justify-center
               hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 
               diration-300 ">
              <BsArrowRightShort />
             </div>
             
             </div>
            
              </div>
            </div>
    )
}

export default Banner
