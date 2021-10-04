import React from "react";
import "./button.css";

const Button = ({ label, inverse, onClick }) => {
  return (
    <button
      className={`button${inverse ? " button--inverse" : ""}`}
      onClick={(e) => onClick(e)}
    >
      {label}
    </button>
  );
};

export default Button;
