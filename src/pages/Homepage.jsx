import React from "react";
import NavBar from "../components/NavBar";
import Images from "../components/Images";
import QuickLinks from "../components/QuickLinks";
import RecommendedDestins from "../components/RecommendedDestins";
import Blogs from "../components/Blogs";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Search from "../components/Search";

const Homepage = () => {
  return (
    <div className="p-0">
      <div className="md:pr-5 md:pl-5 lg:mr-[50px] lg:ml-[50px] p-2">
        <NavBar />
        <Images />
        <Search />
        <QuickLinks />
        <RecommendedDestins />
        <Blogs />
        <Clients />
      </div>
      <div className="lg:pr-[50px] lg:pl-[50px]">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
