import React from "react";

const FormButton = ({ label, inverse, onClick }) => {
  return (
    <button
      className={`form__button${inverse ? " form__button--inverse" : ""}`}
      onClick={(e) => onClick(e)}
    >
      {label}
    </button>
  );
};

export default FormButton;
