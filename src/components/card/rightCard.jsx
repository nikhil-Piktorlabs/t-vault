import React from "react";
import moment from "moment";
import deleteIcon from "../../assets/images/delete.png";
import "./card.css";

const RightCard = ({ logo, logoActive, item, index, onDelete }) => {
  return (
    <div className="card card--right">
      <img src={logo} alt="logo" className="card__logo" />
      <img src={logoActive} alt="logo" className="card__logo-active" />
      <div className="card__info">
        <div className="card__info-name">{item.name}</div>
        <div className="card__info-time">{moment(item.added).fromNow()}</div>
      </div>
      <div className="card__actions">
        <span className="card__icon-container" onClick={() => onDelete(index)}>
          <img src={deleteIcon} alt="delete" className="card__icon" />
        </span>
      </div>
    </div>
  );
};

export default RightCard;
