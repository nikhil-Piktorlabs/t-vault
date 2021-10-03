import React from "react";
import "./card.css";

const Card = ({ logo, item }) => {
  return (
    <div className="card">
      <img src={logo} alt="logo" className="card__image" />
      <div className="card__info">
        <div className="card__info-name">{item.name}</div>
        <div className="card__info-time">Last Updated ...</div>
      </div>
    </div>
  );
};

export default Card;
