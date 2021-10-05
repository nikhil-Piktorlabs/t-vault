import React from "react";
import moment from "moment";
import editIcon from "../../assets/images/edit.png";
import deleteIcon from "../../assets/images/delete.png";
import "./card.css";

const LeftCard = ({ logo, item, onEdit, onDelete, selected, onClick }) => {
  return (
    <div
      className={`card ${selected && "card--selected"}`}
      onClick={() => onClick(item.id)}
    >
      <img src={logo} alt="logo" className="card__logo" />
      <div className="card__info">
        <div className="card__info-name">{item.name}</div>
        <div className="card__info-time">
          Last Updated: {moment(item.updated).fromNow()}
        </div>
      </div>
      <div className={`card__actions ${selected && "card__actions--show"}`}>
        <span className="card__icon-container" onClick={(e) => onEdit(e)}>
          <img src={editIcon} alt="edit" className="card__icon" />
        </span>
        <span
          className="card__icon-container"
          onClick={(e) => onDelete(e, item.id)}
        >
          <img src={deleteIcon} alt="delete" className="card__icon" />
        </span>
      </div>
    </div>
  );
};

export default LeftCard;
