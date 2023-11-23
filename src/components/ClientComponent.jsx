import React from "react";
import Card from "./Card";

const ClientComponent = ({ text, image, role, name }) => {
  return (
    <div className="w-full m-2 sm:w-1/2">
      <Card>
        <p className="text-[#070707]">
          <span className="text-4xl text-[#555]">"</span>
          {text}
        </p>
        <div className="flex mt-3">
          <img
            src={image}
            alt=""
            className="w-[50px] h-[50px] rounded-full mr-4"
          />
          <span className="mt-1">
            <p className="mb font-semibold -mb-2">{name}</p>
            <p className="text-[#555]">{role}</p>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default ClientComponent;
