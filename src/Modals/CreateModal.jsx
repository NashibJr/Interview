import React from "react";
import Modal from "./Modal";
import Input from "../components/Input";
import Button from "../components/Button";

const CreateModal = ({ handleClose, open }) => {
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
      title="Create Destination"
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
          type="text"
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
        <Button
          label="Create"
          classname="w-full text-center uppercase text-white bg-[dodgerblue] mt-3 hover:opacity-80 p-2 rounded-md sm:p-3 font-semibold"
        />
      </form>
    </Modal>
  );
};

export default CreateModal;
