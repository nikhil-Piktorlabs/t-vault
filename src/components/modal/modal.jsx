import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const ModalForm = ({ showModal, handleShowModal, children }) => {
  return ReactDOM.createPortal(
    <div className={`modal${!showModal ? " modal--hidden" : ""}`}>
      <div className="modal__overlay" onClick={(e) => handleShowModal(e)}></div>
      {children}
    </div>,
    document.getElementById("modal")
  );
};

export default ModalForm;
