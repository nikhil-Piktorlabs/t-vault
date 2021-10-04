import React from "react";
import editIcon from "../../assets/images/edit.png";
import deleteIcon from "../../assets/images/delete.png";
import "./card.css";

const Card = ({ logo, item, onDelete }) => {
  return (
    <div className="card" tabIndex={item.id}>
      <img src={logo} alt="logo" className="card__logo" />
      <div className="card__info">
        <div className="card__info-name">{item.name}</div>
        <div className="card__info-time">Last Updated ...</div>
      </div>
      <div className="card__actions">
        <span className="card__icon-container">
          <img src={editIcon} alt="edit" className="card__icon" />
        </span>
        <span
          className="card__icon-container"
          onClick={() => onDelete(item.id)}
        >
          <img src={deleteIcon} alt="delete" className="card__icon" />
        </span>
      </div>
    </div>
  );
};

export default Card;
