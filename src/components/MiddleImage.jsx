import React from "react";
import carosel from "../assets/carosel.webp";
import carosel2 from "../assets/carosel2.webp";
import { LiaShoppingBagSolid } from "react-icons/lia";

const MiddleImage = () => {
  return (
    <>
      <div className="flex w-[100%] overflow-x-auto overflow-y-hidden overflow_width ">
        <div className="relative w-[350px] md:w-[700px]  h-fit md:h-[400px]  flex-shrink-0 overflow-hidden bg-black">
          <img className="w-full " src={carosel} alt="" />
          <span className="absolute  text-2xl bottom-[10px] left-7 border w-10 h-10 rounded-full flex items-center justify-center bg-white">
            <LiaShoppingBagSolid />
          </span>
        </div>
        <div className="relative w-[350px] md:w-[700px] h-fit md:h-[400px]   flex-shrink-0">
          <img className="w-full" src={carosel2} alt="" />
          <span className="absolute text-2xl bottom-[10px] left-7 border w-10 h-10 rounded-full flex items-center justify-center bg-white">
            <LiaShoppingBagSolid />
          </span>
        </div>
      </div>
    </>
  );
};

export default MiddleImage;
