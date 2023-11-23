import React from "react";
import mountain from "../assets/images/mountain.jpg";
import traveller from "../assets/images/traveller.jpeg";
import female from "../assets/images/female.jpg";
import BlogComponent from "./BlogComponent";

const Blogs = () => {
  return (
    <>
      <h2 className="font-bold text-center mt-5 mb-3 text-lg lg:mt-8 lg:mb-5">
        Blogs
      </h2>
      <div className="md:flex flex-col lg:flex-row">
        <span className="lg:w-1/2 mr-5">
          <BlogComponent
            text="The utlimate guide to climb mountain kirimanjaro"
            image={mountain}
          />
        </span>
        <div className="md:flex lg:flex-col lg:w-1/2">
          <span className="mr-3 w-full">
            <BlogComponent
              text="12 Things I'd tell a new tarveller"
              image={traveller}
              adjustHeight={true}
            />
          </span>
          <span className="w-full">
            <BlogComponent
              text="The ultimate packing list for female travellers"
              image={female}
              adjustHeight={true}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Blogs;
