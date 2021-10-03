import React from "react";
import editIcon from "../../images/edit.png";
import deleteIcon from "../../images/delete.png";
import "./card.css";

const Card = ({ logo, item, selected, onSelectedItem, onDelete }) => {
  return (
    <div
      className={`card${selected ? " card--selected" : ""}`}
      onClick={() => onSelectedItem(item.id)}
    >
      <img src={logo} alt="logo" className="card__logo" />
      <div className="card__info">
        <div className="card__info-name">{item.name}</div>
        <div className="card__info-time">Last Updated ...</div>
      </div>
      <div
        className={`card__actions${!selected ? " card__actions--hidden" : ""}`}
      >
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
