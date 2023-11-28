import React from "react";
import logo from "../assets/images/logo.webp";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { links } from "../dummy/constants";
import Link from "./Link";
import Button from "./Button";

const SmallDeviceNav = ({ handleClick }) => {
  const [mobileNav, setMobileNav] = React.useState(false);
  const [loggedin, setLoggedin] = React.useState(false);
  return (
    <>
      <div className="p-3 pl-0 pr-0 flex sm:hidden justify-between">
        <span className="flex">
          <img src={logo} alt="" className="w-[20px] h-[20px] m-1 mt-[6px]" />
          <h2 className="text-[dodgerblue] text-[20px] font-bold">Proto</h2>
        </span>
        <span className="flex">
          <Button
            classname={`text-center bg-[dodgerblue] font-semibold p-1 w-[80px] sm:w-[100px] mr-6 hover:opacity-80 rounded-[24px] text-white uppercase text-xs ${
              loggedin ? "hidden" : "block"
            }`}
            label="login"
            handleClick={handleClick}
          />
          <CiMenuFries
            fill="dodgerblue"
            size={20}
            className="m-[6px] mr-0 cursor-pointer"
            onClick={() => setMobileNav(true)}
          />
        </span>
        {/* small devices */}
        <div
          className={
            mobileNav
              ? "fixed top-0 left-0 w-[100%]  h-screen bg-black/90 z-10 duration-700 overflow-y-scroll"
              : "fixed top-0 left-[-100%] w-[100%] h-screen bg-black/80 z-10 duration-700 overflow-y-scroll delay-200"
          }
        ></div>
        <div
          className={
            mobileNav
              ? "fixed top-0 left-0 w-[65%] md:w-[40%] h-screen bg-white z-10 duration-700 overflow-y-scroll delay-200 hide-scrollbar"
              : "fixed top-0 left-[-100%] w-[65%] md:w-[40%] h-screen bg-white z-10 duration-700 overflow-y-scroll"
          }
        >
          <span className="flex justify-between">
            <span></span>
            <MdClose
              fill="dodgerblue"
              size={20}
              className="m-2 flex justify-end cursor-pointer"
              onClick={() => setMobileNav(false)}
            />
          </span>
          <nav className="h-[95%] flex flex-col">
            <ul className="flex flex-col">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="border-b border-b-[rgba(0, 0, 0, .2)] p-2 text-center font-semibold"
                >
                  <Link
                    route={link.route}
                    label={link.label}
                    Icon={link.icon}
                    index={index}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SmallDeviceNav;
