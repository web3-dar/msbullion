import React from "react";
import serviceimg1 from "../assets/service_img_1.webp";
import serviceimg2 from "../assets/services_img_1.webp";

const Services = () => {
  return (
    <>
      <div className="mt-[100px] mb-7 ">
        <h3 className="font-bold text-4xl mb-3 text-center md:text-start">
          Wedding Services
        </h3>
        <p className="text-center md:text-start">
          Visit us in-store and shop with an expert to curate your wedding
          jewelry wardrobe.
        </p>
      </div>
      <div className="md:flex md:space-x-4 overflow_width  overflow-x-auto">
        <div className="mb-10 md:mb-0">
          <div className="w-[320px] my-0 mx-auto  md:w-[500px] lg:w-[630px] h-fit overflow-hidden">
            <img className="w-full" src={serviceimg1} alt="" />
          </div>
          <div className="my-2 w-[320px]  mx-auto md:mx-0">
            <p className="font-semibold ">Jewelry Care</p>
            <span className="text-[0.9em]">
              Learn how to care for your jewelry
            </span>
          </div>
        </div>

        <div>
          <div className="w-[320px] my-0 mx-auto  md:w-[500px] lg:w-[630px] h-fit overflow-hidden">
            <img className="w-full" src={serviceimg2} alt="" />
          </div>
          <div className="my-2 w-[320px]  mx-auto md:mx-0 ">
            <p className="font-semibold ">Personal Styling</p>
            <span className="text-[0.9em] md:w-[500px] block">
              From diamond bands and stunning day-of looks to selecting the
              perfect wedding party gifts, we've got you covered.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
