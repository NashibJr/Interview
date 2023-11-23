import React from "react";

const FooterLink = ({ route, label }) => {
  return (
    <li className="text-[#555] text-sm md:mr-3 hover:text-black lg:mr-10">
      <a href="/">{label}</a>
    </li>
  );
};

export default FooterLink;
