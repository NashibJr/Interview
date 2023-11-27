import React from "react";
import ContinentNavs from "./ContinentNavs";
import Destination from "./Destination";
import london from "../assets/images/london.jpg";
import client from "../api/client";

const RecommendedDestins = ({ handleOpenCreateModal }) => {
  const [destinations, setDestinations] = React.useState([]);
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    fetchDestinations();
  }, []);

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
                country={destination.location}
                desc={destination.description}
                distance={destination.distance}
                duration={destination.duration}
                price={destination.price}
                image={london}
                key={destination.id}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default RecommendedDestins;
