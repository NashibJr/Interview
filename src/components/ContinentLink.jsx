import React from "react";

const ContinentLink = ({
  showNotification,
  handleNav,
  notificationNum,
  label,
  active,
  handleClick,
}) => {
  return (
    <li
      className={`w-[100px] flex justify-between ${
        active ? "active" : ""
      } mr-5 cursor-pointer`}
      onClick={() => {
        handleNav();
        handleClick();
      }}
    >
      <a className="text-sm text-[#070707]">{label}</a>
      <div
        className={`w-5 h-5 text-xs text-center p-[1px] bg-red-600 rounded-full text-white -translate-y-4 translate-x-4 ${
          showNotification ? "block" : "hidden"
        } `}
      >
        {notificationNum}
      </div>
    </li>
  );
};

export default ContinentLink;
