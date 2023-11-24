import React from "react";
import Modal from "./Modal";
import Button from "../components/Button";

const DeleteModal = ({ open, handleClose }) => {
  return (
    <Modal
      title="confirm deletion"
      open={open}
      handleClose={handleClose}
      id="delete"
      descID="deleteID"
    >
      <h2 className="font-semibold sm:text-lg mb-5 m-2">
        Are you sure you want to delete this destination?
      </h2>
      <span className="flex">
        <Button
          label="cancel"
          classname="w-1/2 text-center uppercase text-white bg-[#555] mt-3 hover:opacity-80 p-2 rounded-md sm:p-3 font-semibold m-2"
          handleClick={handleClose}
        />
        <Button
          label="delete"
          classname="w-1/2 text-center uppercase text-white bg-red-500 mt-3 hover:opacity-80 p-2 rounded-md sm:p-3 font-semibold h-[48px] m-2"
        />
      </span>
    </Modal>
  );
};

export default DeleteModal;
