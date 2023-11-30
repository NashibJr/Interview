import React from "react";
import Modal from "./Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import client from "../api/client";

const CreateModal = ({ handleClose, open, getDestination }) => {
  const [state, setState] = React.useState({
    place: "",
    distance: "",
    price: "",
    duration: "",
    description: "",
  });

  const [loader, setLoader] = React.useState(false);
  const [image, setImage] = React.useState("");

  const handleImageChange = (event) => {
    const { files } = event.target;
    const form = new FormData();
    form.append("image", files);
    setImage(files[0].name);
  };

  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  const handleCreate = async (event) => {
    const data = { ...state, image: image };
    event.preventDefault();
    try {
      setLoader(true);
      const response = await client.post("", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      getDestination(response?.data?.data);
      setLoader(false);
      alert(response?.data?.message);
      handleClose();
      setState({
        description: "",
        duration: "",
        distance: "",
        image: "",
        place: "",
        price: "",
      });
    } catch (error) {
      setLoader(false);
      alert(error?.message);
      console.log(error);
    }
  };

  return (
    <Modal
      title="Create Destination"
      open={open}
      id="create"
      descID="create-dest"
      handleClose={handleClose}
    >
      <form encType="multipart/form-data" method="post">
        <label>Destination image</label>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
          className="border border-[rgba(0, 0, 0, .2)] rounded-md p-2 mt-0 w-full outline-none sm:p-3 mb-2 sm:mb-3"
        />
        <Input
          type="text"
          name="place"
          placeholder="Enter city"
          value={state.place}
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
          label={loader ? "creating...." : "Create"}
          classname="w-full text-center uppercase text-white bg-[dodgerblue] mt-3 hover:opacity-80 p-2 rounded-md sm:p-3 font-semibold"
          handleClick={handleCreate}
        />
      </form>
    </Modal>
  );
};

export default CreateModal;
