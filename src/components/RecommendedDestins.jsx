import React from "react";
import ContinentNavs from "./ContinentNavs";
import Destination from "./Destination";
import london from "../assets/images/london.jpg";

const RecommendedDestins = () => {
  return (
    <div className="mt-5 pt-2 sm:mt-8">
      <h2 className="font-bold mb-2 text-center text-lg md:text-xl">
        Recommended Destinations
      </h2>
      <div className="w-full overflow-x-scroll hide-scrollbar mb-5 md:flex justify-center">
        <ContinentNavs />
      </div>
      <div className="flex flex-wrap justify-center">
        <Destination
          country="Singapore"
          desc="Singapore, officially the republic of singapore is a sovereign island
          city-state in maritime SouthEest"
          image={london}
        />
        <Destination
          country="Bora Bora"
          desc="Singapore, officially the republic of singapore is a sovereign island
          city-state in maritime SouthEest"
          image={london}
        />
        <Destination
          country="London"
          desc="Singapore, officially the republic of singapore is a sovereign island
          city-state in maritime SouthEest"
          image={london}
        />
        <Destination
          country="Thailand"
          desc="Thailand is a south east Asian country. It is known for tropical beaches, opulent royal palaces"
          image={london}
        />
        <Destination
          country="Paris"
          desc="Paris is a major european city and a global center for art, fashion"
          image={london}
        />
        <Destination
          country="New Zealand"
          desc="New Zealand, officially the republic of singapore is a sovereign island
          city-state"
          image={london}
        />
      </div>
    </div>
  );
};

export default RecommendedDestins;
