import React from "react";

const TranslateTxt = () => {
  const logos = [
    { id: 0, title: "FREE 30 DAY - RETURN" },
    { id: 1, title: "FREE SHIPPING ON ORDERS OVER $75" },
    { id: 2, title: "2-YEAR WARRANTY" },
    { id: 3, title: "SHOP NOW, PAY NOW WITH KLARNA" },
  ];

  const repeatedLogos = [...logos, ...logos];

  return (
    <>
      <div className="overflow-hidden whitespace-nowrap my-10 border border-black py-3 ">
        <ul className="flex animate-marquee  ">
          {repeatedLogos.map((log, index) => (
            <li
              className="flex-shrink-0 min-w-fit mx-5  text-gray-950 font-mono"
              key={index}
            >
              {log.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 py-7 border-b border-black">
        <p className="text-center w-fit px-4 md:px-0 text-balance md:w-[400px] lg:w-[700px] my-0 mx-auto text-[0.8em] font-mono">
          Discover the MSB collection of gold bars, each piece designed to add a touch of elegance and grace to
          your bridal ensemble. Whether you are searching for the timeless
          beauty of brid... See more
        </p>
      </div>
    </>
  );
};

export default TranslateTxt;
