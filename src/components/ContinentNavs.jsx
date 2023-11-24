import React from "react";
import Link from "./Link";
import ContinentLink from "./ContinentLink";
import Button from "./Button";
import { IoMdAddCircleOutline } from "react-icons/io";

const ContinentNavs = ({ handleNav, showNotification = true }) => {
  return (
    <ul className="border-b border-b-[rgba(0, 0, 0, .2)] flex justify-center mt-5">
      <ContinentLink
        label="Asia"
        notificationNum="3"
        showNotification={true}
        active={true}
      />
      <ContinentLink label="Europe" />
      <ContinentLink label="Africa" />
      <ContinentLink label="America" />
      <li>
        <IoMdAddCircleOutline
          size={25}
          className="cursor-pointer hover:text-black text-[dodgerblue]"
        />
      </li>
    </ul>
  );
};

export default ContinentNavs;
