import React from "react";
import "./modal.css";

const ModalForm = ({ showModal, children }) => {
  return (
    <div className={`modal${!showModal ? " modal--hidden" : ""}`}>
      {children}
    </div>
  );
};

export default ModalForm;
