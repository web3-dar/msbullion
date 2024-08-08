import React from "react";
import footerimg from "../assets/footerImg.webp";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-2 px-1 py-10 gap-5 lg:flex lg:space-x-4 w-[90%] my-0 mx-auto border-b border-black ">
        <div className="mb-3 md:w-fit">
          <p className="font-bold text-xl">Help</p>
          <ul className="mt-2 flex flex-col gap-3 lg:gap-0 ">
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Shippings
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Warranty
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Accessibility Statement
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-fit ">
          <p className="font-bold text-xl">Stores & Services</p>
          <ul className="mt-2 flex flex-col gap-3 lg:gap-0">
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Stores
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Piercing Studio
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Styling Appointments
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-fit">
          <p className="font-bold text-xl">Resources</p>
          <ul className="mt-2 flex flex-col gap-3 lg:gap-0">
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Jewelry Care
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Ring Sizer
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Piercing Aftercare
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Style Edit
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Supplier Code of Conduct
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Membership
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-fit">
          <p className="font-bold text-xl">About MSB</p>
          <ul className="mt-2 flex flex-col gap-3 lg:gap-0">
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Our Mission
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Sustainability
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Commitments
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Materials
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Reviews
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <p className="mb-3 flex items-center space-x-1 font-semibold">
            <span>
              <CiLocationOn />
            </span>
            Find a Store
          </p>
          <img
            className="w-[250px] h-fit border object-contain"
            src={footerimg}
            alt=""
          />
        </div>
      </div>
      <div className="md:hidden px-4 mt-8 ">
        <p className="mb-3 flex items-center space-x-1 font-semibold">
          <span>
            <CiLocationOn />
          </span>
          Find a Store
        </p>
        <img
          className="w-[400px] my-0 mx-auto h-fit border object-contain"
          src={footerimg}
          alt=""
        />
      </div>
      <div className="md:px-16 py-5">
        <p className="text-center lg:text-start mb-2">BECOME A MEMBER</p>
        <div className="flex items-center flex-col lg:flex-row">
          <p className="w-[350px] text-[0.7em] mb-3 md:mb-0">
            Join MSB+ for free and discover exclusive access to our biggest
            drops, promotions, members-only products, and more.
          </p>
          <button className="border px-3 py-3 border-black hover:bg-black hover:text-white transition-all duration-[0.3s]">
            JOIN NOW FOR FREE
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
