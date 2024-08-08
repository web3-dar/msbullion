import React from "react";
import heroImg_1 from "../assets/gold-1.jpg";
import heroImg_2 from "../assets/gold-2.jpg";
import heroImg_3 from "../assets/gold-3.jpg";
import heroImg_4 from "../assets/gold-4.jpg";

const Hero = () => {
  return (
    <>
      <div className="py-3">
        <a className="text-[14px] text-[#d3ae3e] font-bold" href="#">
          Shop All / The Wedding Shop
        </a>
      </div>
      <div className="py-5">
        <h1 className="text-[1.9em] sm:text-3xl font-bold uppercase mb-3 text-[#423615]  md:text-4xl">
        MS Bullion Bars Available
        </h1>
        <p className="text-[14px] md:text-[18px] mb-4">
        Gold is arguably the most diverse precious metal available to investors and collectors. You’ll find gold for sale in the form of coins, rounds, and bullion bars. <b>Mary Sandra bullion</b> bars are perhaps the top choice of investors. Mary Sandra bullion offer variety in terms of weight, purity, and style. With so many options to choose from, it can feel overwhelming. When you boil down the market though, you’ll see that it’s less difficult to find the right piece of gold bullion for your portfolio. Learn more about gold bars available from Mary Sandra bullion below!
        </p>
        <div className="overflow-x-auto overflow_width">
          <div className="flex space-x-2 w-[120px]">
            <div>
              <div className="w-[160px] h-[160px] lg:w-[320px] lg:h-[300px] overflow-hidden">
                <img className="w-full object-contain" src={heroImg_1} alt="" />
              </div>
              <p className="py-2 font-bold text-[13px] md:text-[16px] text-gray-700 font-serif ">
                Pure Gold Bars
              </p>
            </div>
            <div>
              <div className="w-[160px] h-[160px] lg:w-[320px] lg:h-[300px] overflow-hidden">
                <img className="w-full" src={heroImg_2} alt="" />
              </div>
              <p className="py-2 font-bold text-[13px] md:text-[16px] text-gray-700 font-serif">
                Pure Gold Bars
              </p>
            </div>
            <div>
              <div className="w-[160px] h-[160px] lg:w-[320px] lg:h-[300px] border overflow-hidden">
                <img className="w-full " src={heroImg_3} alt="" />
              </div>
              <p className="py-2 font-bold text-[13px] md:text-[16px] text-gray-700 font-serif">
                Pure Gold Bars
              </p>
            </div>
            <div>
              <div className="w-[160px] h-[160px] lg:w-[320px] lg:h-[300px] overflow-hidden">
                <img className="w-full" src={heroImg_4} alt="" />
              </div>
              <p className="py-2 font-bold text-[13px] md:text-[16px] text-gray-700 font-serif">
                Pure Gold Bars
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
