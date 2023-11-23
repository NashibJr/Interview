import React from "react";
import miami from "../assets/images/miami.jpg";

const Images = () => {
  return (
    <div
      className="w-full h-[250px] mt-2 rounded-lg flex justify-center flex-col items-center md:h-[350px]"
      style={{
        backgroundImage: `url(${miami})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h2
        className="text-white uppercase text-[20px] font-bold text-center -mt-6 md:text-3xl"
        style={{ textShadow: "2px 2px 2px #000" }}
      >
        travel to explore
      </h2>
      <p
        className="text-white text-center text-sm mt-3"
        style={{ textShadow: "2px 2px 2px #000" }}
      >
        Loren Ipsum Dolor Sit Amet Consectetur
        <br />
        Adipscing Elit, Sed Do Eiusmond Tempor Incididunt <br />
        Ut Labore Et Dolore Magna Ultricies Mi Eget
      </p>
      <div className="w-6 h-6 bg-red-600 rounded-full text-center text-white m-2">
        1
      </div>
    </div>
  );
};

export default Images;
