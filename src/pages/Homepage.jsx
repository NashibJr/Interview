import React from "react";
import NavBar from "../components/NavBar";
import Images from "../components/Images";
import QuickLinks from "../components/QuickLinks";
import RecommendedDestins from "../components/RecommendedDestins";
import Blogs from "../components/Blogs";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Search from "../components/Search";
import CreateModal from "../Modals/CreateModal";

const Homepage = ({ handleOpen }) => {
  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const [destination, setDestination] = React.useState();

  const getDestination = (destination) => setDestination(destination);

  return (
    <div className="p-0">
      <div className="md:pr-5 md:pl-5 lg:mr-[50px] lg:ml-[50px] p-2">
        <NavBar handleOpen={handleOpen} />
        <Images />
        <Search />
        <QuickLinks />
        <RecommendedDestins
          handleOpenCreateModal={() => setOpenCreateModal(true)}
          destination={destination}
        />
        <Blogs />
        <Clients />
      </div>
      <div className="lg:pr-[50px] lg:pl-[50px]">
        <Footer />
      </div>
      <CreateModal
        open={openCreateModal}
        handleClose={() => setOpenCreateModal(false)}
        getDestination={getDestination}
      />
    </div>
  );
};

export default Homepage;
