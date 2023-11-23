import React from "react";
import Card from "./Card";

const QuickLinkComponent = ({ label, text, icon }) => {
  return (
    <div className="m-5">
      <Card>
        <div className="min-w-[250px] h-[150px] w-1/4">
          <div className="bg-[#cfc6c6] w-[50px] h-[50px] pt-[10px] rounded-md">
            {icon}
          </div>
          <h2 className="mt-1 font-bold mb-3">{label}</h2>
          <p className="text-[#070707] text-sm mb-4">{text}</p>
        </div>
      </Card>
    </div>
  );
};

export default QuickLinkComponent;
