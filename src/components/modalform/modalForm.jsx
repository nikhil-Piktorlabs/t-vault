import React from "react";
import "./modalform.css";

const ModalForm = ({ showModal, children }) => {
  return (
    <div className={`modal${!showModal ? " modal--hidden" : ""}`}>
      <form className="form">{children}</form>
    </div>
  );
};

export default ModalForm;
