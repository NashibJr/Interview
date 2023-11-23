import React from "react";
import Link from "./Link";
import ContinentLink from "./ContinentLink";

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
    </ul>
  );
};

export default ContinentNavs;
