import React from "react";

const Link = ({ route, label, index }) => {
  return (
    <>
      <a
        href={route}
        className={`${
          index === 0 ? "text-[#964800]" : "text-[#daa520]"
        } hover:text-[#964800] text-[19px] lg:text-[22px]`}
      >
        {label}
      </a>
    </>
  );
};

export default Link;
