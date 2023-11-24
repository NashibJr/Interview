import React from "react";
import { FaHotel } from "react-icons/fa6";
import { MdOutlineDining } from "react-icons/md";
import { IoMdAirplane } from "react-icons/io";

const Destination = ({ image, country, desc }) => {
  return (
    <div className="w-[150px] m-1 mb-5 sm:w-[290px] md:w-[300px] xs:w-[200px] lg:w-[410px] md:mr-4">
      <div
        className="card-content w-[150px] h-[140px] m-1 rounded-lg mb-2 sm:w-[290px] sm:h-[160px] md:w-[300px] xs:w-[200px] md:h-[220px] lg:w-[410px] lg:h-[260px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div>
        <h2 className="text-[#070707] font-semibold mb-1 sm:text-lg">
          {country}
        </h2>
        <p className="text-[#070707] text-xs mb-2 sm:text-sm">{desc}</p>
        <div className="flex justify-between">
          <div>
            <div className="flex">
              <FaHotel className="bg-[#070707] text-white rounded-full w-[10px] h-[10px] md:w-[15px] md:h-[15px]" />
              <MdOutlineDining className="bg-[#070707] text-white rounded-full mr-1 ml-1 w-[10px] h-[10px] md:w-[15px] md:h-[15px]" />
              <IoMdAirplane className="bg-[#070707] text-white rounded-full w-[10px] h-[10px] md:w-[15px] md:h-[15px]" />
            </div>
            <p className="text-[#070707] font-semibold text-xs text-left mt-2 md:font-bold md:text-sm">
              1000 Kms
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm">$ 10,000</p>
            <p className="text-[#070707] font-semibold text-xs md:font-bold md:text-sm">
              Approx 2 nights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
