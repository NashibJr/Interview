import React from "react";
import { FaHotel } from "react-icons/fa6";
import { MdOutlineDining } from "react-icons/md";
import { IoMdAirplane } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import UpdateModal from "../Modals/UpdateModal";
import DeleteModal from "../Modals/DeleteModal";

const Destination = ({
  image,
  country,
  desc,
  price,
  distance,
  duration,
  id,
  updateDelete,
  setOpenModal,
  getId,
}) => {
  const [showIcons, setShowIcons] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  return (
    <div className="w-[150px] m-1 mb-5 sm:w-[290px] md:w-[300px] xs:w-[200px] lg:w-[410px] md:mr-4 cursor-pointer">
      <div
        className="card-content w-[150px] h-[140px] m-1 rounded-lg mb-2 sm:w-[290px] sm:h-[160px] md:w-[300px] xs:w-[200px] md:h-[220px] lg:w-[410px] lg:h-[260px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseOver={() => setShowIcons(true)}
        onMouseLeave={() => setShowIcons(false)}
      >
        <div className="p-2 flex justify-between">
          <MdDelete
            className={`w-[20px] h-[20px] md:w-[30px] md:h-[30px] cursor-pointer ${
              showIcons ? "block" : "hidden"
            }`}
            fill="red"
            onClick={() => setOpenDeleteModal(true)}
          />
          <GrUpdate
            className={`w-[15px] h-[15px] md:w-[30px] md:h-[20px] cursor-pointer mt-1 ${
              showIcons ? "block" : "hidden"
            }`}
            onClick={() => {
              setOpenModal(true);
              getId(id);
            }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-[#070707] font-semibold mb-1 sm:text-lg">
          {country}
        </h2>
        <p className="text-[#070707] text-xs mb-2 sm:text-sm">{desc}</p>
        <div className="flex justify-between">
          <div>
            <div className="flex">
              <FaHotel className="bg-[#070707] text-white rounded-full w-[10px] h-[10px] md:w-[15px] md:h-[15px]" />
              <MdOutlineDining className="bg-[#070707] text-white rounded-full mr-1 ml-1 w-[10px] h-[10px] md:w-[15px] md:h-[15px]" />
              <IoMdAirplane className="bg-[#070707] text-white rounded-full w-[10px] h-[10px] md:w-[15px] md:h-[15px]" />
            </div>
            <p className="text-[#070707] font-semibold text-xs text-left mt-2 md:font-bold md:text-sm">
              {distance}
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm">$ {price}</p>
            <p className="text-[#070707] font-semibold text-xs md:font-bold md:text-sm">
              {duration}
            </p>
          </div>
        </div>
      </div>
      <DeleteModal
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
        id={id}
        updateDelete={() => updateDelete(id)}
      />
    </div>
  );
};

export default Destination;
