import React from "react";

const Button = ({ classname, label, handleClick }) => {
  return (
    <button type="button" className={classname} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
