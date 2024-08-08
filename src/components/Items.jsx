import React, { useState } from "react";
import items from "../components/index.js";
import { CiHeart } from "react-icons/ci";

const Items = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  return (
    <>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10">
          {items.map((item) => (
            <li key={item.id} className="relative flex flex-col mb-5  w-fit">
              <div className="w-full max-w-[300px] h-fit overflow-hidden">
                <img
                  className="w-full transition-transform duration-500 ease-in-out"
                  src={hoveredImage === item.id ? item.hover : item.img}
                  alt={item.title}
                  onMouseEnter={() => setHoveredImage(item.id)} // Set the hovered image
                  onMouseLeave={() => setHoveredImage(null)} // Reset on mouse leave
                />
              </div>
              <p className="font-semibold pt-3  text-[14px]">{item.title}</p>
              <p className=" text-[14px]">${item.price}</p>
              <span className="absolute border left-0 text-[12px] top-0 p-2 bg-gray-100">
                {item.other}
              </span>
              <span className="absolute  right-0 text-[12px] top-0 p-2 ">
                <CiHeart className="text-2xl" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Items;
