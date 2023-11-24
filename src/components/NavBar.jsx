import React from "react";
import logo from "../assets/images/logo.webp";
import { links } from "../dummy/constants";
import Link from "./Link";
import Button from "./Button";
import SmallDeviceNav from "./SmallDeviceNav";

const NavBar = ({ handleOpen }) => {
  return (
    <>
      <nav className="w-full sm:flex hidden p-2 justify-between">
        <div className="flex">
          <img src={logo} alt="" className="w-[30px] h-[30px] m-1 mt-[6px]" />
          <h2 className="text-[dodgerblue] text-[24px] font-bold">Proto</h2>
        </div>
        <ul className="flex m-[5px]">
          {links.map((link, index) => (
            <li key={index} className="text-center font-semibold mr-3 md:mr-12">
              <Link
                route={link.route}
                label={link.label}
                Icon={link.icon}
                index={index}
              />
            </li>
          ))}
        </ul>
        <Button
          label="login"
          classname="h-[35px] pb-[1px] m-1 uppercase text-white text-center font-semibold rounded-[24px] bg-[dodgerblue] w-[100px]"
          handleClick={handleOpen}
        />
      </nav>
      <SmallDeviceNav />
    </>
  );
};

export default NavBar;
