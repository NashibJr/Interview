import React from "react";
import Modal from "./Modal";
import Input from "../components/Input";
import Button from "../components/Button";

const CreateModal = ({ handleClose, open }) => {
  return (
    <Modal
      title="Create Destination"
      open={open}
      id="create"
      descID="create-dest"
      handleClose={handleClose}
    >
      <form>
        <label>Destination image</label>
        <Input type="file" name="image" />
        <Input type="text" name="location" placeholder="Enter city" />
        <Input type="text" name="distance" placeholder="Enter distance" />
        <Input type="text" name="price" placeholder="Enter price" />
        <Input type="text" name="duration" placeholder="Enter duration" />
        <textarea
          placeholder="Description"
          rows={4}
          className="border border-[rgba(0, 0, 0, .2)] rounded-md p-2 mt-0 w-full outline-none sm:p-3 mb-2 sm:mb-3"
        ></textarea>
        <Button
          label="Create"
          classname="w-full text-center uppercase text-white bg-[dodgerblue] mt-3 hover:opacity-80 p-2 rounded-md sm:p-3 font-semibold"
        />
      </form>
    </Modal>
  );
};

export default CreateModal;
