import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="mt-3 w-full p-2 bg-slate-300 md:flex md:justify-between md:m-5 md:w-[95%] lg:w-[97%] md:rounded-lg md:h-[90px] md:pt-6">
      <div className="w-[100px] flex justify-between md:mt-3">
        <FaFacebook size={25} fill="blue" />
        <FaLinkedin size={25} fill="blue" className="rounded-full" />
        <FaInstagram size={25} fill="blue" />
      </div>
      <ul className="mt-3 sm:flex">
        <FooterLink label="Home" />
        <FooterLink label="About" />
        <FooterLink label="Places" />
        <FooterLink label="Careers" />
        <FooterLink label="Blog" />
      </ul>
      <p className="text-xs mt-3">
        Copyright @ {new Date().getFullYear()} Proto Web Site Test All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
