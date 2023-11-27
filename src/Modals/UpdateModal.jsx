import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "./Modal";
import client from "../api/client";

const UpdateModal = ({ handleClose, open, id, updateDestination }) => {
  const [destination, setDestination] = React.useState({});
  const [loader, setLoader] = React.useState(false);
  const [state, setState] = React.useState({
    place: "",
    image: "",
    distance: "",
    price: "",
    duration: "",
    description: "",
  });

  React.useEffect(() => {
    (async () => {
      try {
        const response = await client.get(`/${id}`);
        if (open) {
          setDestination(response?.data?.data[0]);
          setState({
            description: response?.data?.data[0]?.description,
            distance: response?.data?.data[0]?.distance,
            duration: response?.data?.data[0]?.duration,
            place: response?.data?.data[0]?.place,
            price: response?.data?.data[0]?.price,
          });
        } else {
          setDestination({});
        }
      } catch (error) {
        console.log(error);
      }
    })();

    return () => setDestination({});
  }, [id, open]);

  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  const handleUpdate = async (event) => {
    event.preventDefault();
    const data = { ...state };
    try {
      setLoader(true);
      const response = await client.put(`/${id}`, data);
      handleClose();
      updateDestination(response?.data?.data[0]);
      setLoader(false);
      alert(response?.data?.message);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

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
        {/* <Input
          type="file"
          name="image"
          value={state.image}
          handleChange={handleChange}
        /> */}
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
            label={loader ? "updating..." : "Update"}
            classname="w-1/2 text-center uppercase text-white bg-[dodgerblue] mt-3 hover:opacity-80 p-2 rounded-md sm:p-3 font-semibold h-[48px] m-2"
            handleClick={handleUpdate}
          />
        </span>
      </form>
    </Modal>
  );
};

export default UpdateModal;
