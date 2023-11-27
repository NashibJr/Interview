import React from "react";
import ContinentNavs from "./ContinentNavs";
import Destination from "./Destination";
import london from "../assets/images/london.jpg";
import client from "../api/client";
import UpdateModal from "../Modals/UpdateModal";

const RecommendedDestins = ({ handleOpenCreateModal, destination }) => {
  const [destinations, setDestinations] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    fetchDestinations();
    if (destination) {
      upDate(destination);
    }
  }, [destination]);

  const fetchDestinations = async () => {
    try {
      setLoader(true);
      const response = await client.get("");
      setDestinations(response?.data?.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      alert(error?.message);
      console.log(error);
    }
  };

  const getId = (id) => setId(id);

  const upDate = (destination) =>
    setDestinations((prevState) => [...prevState, destination]);

  const updateDelete = (id) =>
    setDestinations((prevState) =>
      prevState.filter((destination) => destination.id !== id)
    );

  const updateDestination = (updatedDestination) =>
    setDestinations((prevState) =>
      prevState.map((item) => {
        if (updatedDestination?.id === item?.id) {
          return updatedDestination;
        }
        return item;
      })
    );

  return (
    <div className="mt-5 pt-2 sm:mt-8">
      <h2 className="font-bold mb-2 text-center text-lg md:text-xl">
        Recommended Destinations
      </h2>
      <div className="w-full overflow-x-scroll hide-scrollbar mb-5 md:flex justify-center">
        <ContinentNavs
          handleOpenCreateModal={handleOpenCreateModal}
          handleClick={fetchDestinations}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {loader ? (
          <img
            src={require("../assets/images/loader.gif")}
            alt=""
            className="w-[20px] h-[20px] sm:h-[40px] sm:w-[40px]"
          />
        ) : (
          <>
            {destinations?.map((destination) => (
              <Destination
                country={destination.place}
                desc={destination.description}
                distance={destination.distance}
                duration={destination.duration}
                price={destination.price}
                image={london}
                key={destination.id}
                id={destination.id}
                updateDelete={updateDelete}
                setOpenModal={setOpenModal}
                getId={getId}
              />
            ))}
          </>
        )}
      </div>
      <UpdateModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        id={id}
        updateDestination={updateDestination}
      />
    </div>
  );
};

export default RecommendedDestins;
