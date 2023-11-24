import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "./Modal";

const UpdateModal = ({ handleClose, open }) => {
  const [image, setImage] = React.useState("");
  const [state, setState] = React.useState({
    location: "",
    distance: "",
    price: "",
    duration: "",
    description: "",
  });

  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  return (
    <Modal
      title="Update Destination"
      open={open}
      id="create"
      descID="create-dest"
      handleClose={handleClose}
    >
      <form>
        <label>Destination image</label>
        <Input
          type="file"
          name="image"
          value={image}
          handleChange={() => setImage(null)}
        />
        <Input
          type="text"
          name="location"
          placeholder="Enter city"
          value={state.location}
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="distance"
          placeholder="Enter distance"
          value={state.distance}
          handleChange={handleChange}
        />
        <Input
          type="number"
          name="price"
          placeholder="Enter price"
          value={state.price}
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="duration"
          placeholder="Enter duration"
          value={state.duration}
          handleChange={handleChange}
        />
        <textarea
          placeholder="Description"
          rows={4}
          name="description"
          className="border border-[rgba(0, 0, 0, .2)] rounded-md p-2 mt-0 w-full outline-none sm:p-3 mb-2 sm:mb-3"
          value={state.description}
          onChange={handleChange}
        ></textarea>
        <span className="flex">
          <Button
            label="cancel"
            classname="w-1/2 text-center uppercase text-white bg-[#555] mt-3 hover:opacity-80 p-2 rounded-md sm:p-3 font-semibold m-2"
            handleClick={handleClose}
          />
          <Button
            label="Update"
            classname="w-1/2 text-center uppercase text-white bg-[dodgerblue] mt-3 hover:opacity-80 p-2 rounded-md sm:p-3 font-semibold h-[48px] m-2"
          />
        </span>
      </form>
    </Modal>
  );
};

export default UpdateModal;
