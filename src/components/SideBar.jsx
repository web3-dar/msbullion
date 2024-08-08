import React, { useEffect } from "react";
import useToggle from "../services/useToggle";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";

const SideBar = () => {
  const { open, setOpen } = useToggle();

  return (
    <>
      <div
        className={`md:hidden w-[90%] h-[100vh] border-r-4 border-[#E9BA2B] top-0 bottom-0 bg-white fixed overflow-y-auto z-50 transition-all duration-[0.5s] translate-x-[-500px] ${
          open ? "translate-x-[0]" : "translate-x-[-500px]"
        }`}
      >
        <div className="h-[70px] flex items-center justify-end px-5 text-[40px]">
          <RiCloseLargeFill className="p-1" onClick={() => setOpen()} />
        </div>
        <div className="w-[90%] my-0 mx-auto pb-7">
          <ul className=" border-b-2 border-black">
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>NEW </span>
              <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3">BEST SELLERS </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>EARNING</span> <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              {" "}
              <span>RINGS</span> <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              {" "}
              <span>NECKLACES</span> <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              {" "}
              <span>BRACELETS</span> <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              {" "}
              <span>SHOP BY</span> <FaAngleRight className="text-[16px]" />{" "}
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              {" "}
              <span>MEN'S</span> <FaAngleRight className="text-[16px]" />
            </li>
          </ul>
          <ul className="py-7 border-b-2 border-black">
            <li className="mb-4 font-serif">Stores & Services</li>
            <li className="mb-4 font-serif">Piercing Studio</li>
            <li className="mb-4 font-serif">About Us</li>
            <li className="mb-4 font-serif">Help</li>
            <li className="mb-4 font-serif">Join Now</li>
          </ul>
          <div className="py-5">
            <p className="font-extrabold text-[1.3em]">
              DISCOVER all things MSB—AND MORE.
            </p>
            <p className="font-serif mt-3">
              One account to shop personalized recommendations and exclusive
              products. Plus, get priority sale access, free shipping every
              Monday, and more.
            </p>
            <button className="w-full py-3 bg-[#E9BA2B] font-bold my-5">
              SIGN IN
            </button>
            <a href="#">
              New to MSB? <span className="underline">Create Account</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
