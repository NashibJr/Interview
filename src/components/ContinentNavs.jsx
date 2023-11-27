import React from "react";
import ContinentLink from "./ContinentLink";
import { IoMdAddCircleOutline } from "react-icons/io";

const ContinentNavs = ({
  showNotification,
  handleOpenCreateModal,
  handleClick,
}) => {
  const [navs, setNavs] = React.useState({
    asia: true,
    europe: false,
    africa: false,
    america: false,
  });
  return (
    <ul className="border-b border-b-[rgba(0, 0, 0, .2)] flex justify-center mt-5">
      <ContinentLink
        label="Asia"
        notificationNum="3"
        showNotification={true}
        active={navs.asia}
        handleNav={() =>
          setNavs({ africa: false, america: false, asia: true, europe: false })
        }
        handleClick={handleClick}
      />
      <ContinentLink
        label="Europe"
        active={navs.europe}
        handleNav={() =>
          setNavs((prevState) => ({
            africa: false,
            america: false,
            asia: false,
            europe: true,
          }))
        }
        handleClick={handleClick}
      />
      <ContinentLink
        label="Africa"
        active={navs.africa}
        handleNav={() =>
          setNavs({ africa: true, america: false, asia: false, europe: false })
        }
        handleClick={handleClick}
      />
      <ContinentLink
        label="America"
        active={navs.america}
        handleNav={() =>
          setNavs({ africa: false, america: true, asia: false, europe: false })
        }
        handleClick={handleClick}
      />
      <li>
        <IoMdAddCircleOutline
          size={25}
          className="cursor-pointer hover:text-black text-[dodgerblue]"
          onClick={handleOpenCreateModal}
        />
      </li>
    </ul>
  );
};

export default ContinentNavs;
