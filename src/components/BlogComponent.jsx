import React from "react";

const BlogComponent = ({ text, image, adjustHeight }) => {
  return (
    <div
      className={`w-full h-[300px] mb-5 rounded-lg card-content ${
        adjustHeight ? "lg:h-[190px]" : "lg:h-[400px]"
      }`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`image-bg w-full h-[300px] pt-24 p-5 rounded-lg ${
          adjustHeight ? "lg:h-[190px] lg:pt-16" : "lg:h-[400px] pt-36"
        }`}
      >
        <h2 className="text-3xl text-center text-white font-bold">{text}</h2>
      </div>
    </div>
  );
};

export default BlogComponent;
