import React from "react";

const Input = ({ type, name, value, placeholder, handleChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className="border border-[rgba(0, 0, 0, .2)] rounded-md p-2 mt-0 w-full outline-none sm:p-3 mb-2 sm:mb-3"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
