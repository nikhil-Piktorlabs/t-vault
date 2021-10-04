import React from "react";
import { useSelector } from "react-redux";
import secretIcon from "../../../assets/images/secret.png";
import Button from "../../../components/button/button";
import "./safesright.css";

const SafesRight = () => {
  const safes = useSelector((state) => state.safes);
  const safe = safes.find((s) => s.selected === true);

  return (
    <section className="safes-right">
      <div className="safes-right__banner">
        <div className="safes-right__caption">
          <h1>{safe ? safe.name : "No Safes Created Yet"}</h1>
          <p className="safes-right__safe-description">
            {safe
              ? safe.description
              : "Create a Safe to see your secrets, fsolders and permissions here"}
          </p>
        </div>
      </div>
      <div className="secrets">
        <div className="secrets__heading">Secrets</div>
        <div className="hl-1"></div>
        <div className="secrets__count">0 Secrets</div>
        <div className="secrets__list secrets__empty">
          <img src={secretIcon} alt="secret" className="secrets__image" />
          <div className="secrets__caption">
            Add a <span className="secrets__caption-highlight">Folder</span> and
            then you’ll be able to add{" "}
            <span className="secrets__caption-highlight">Secrets</span> to view
            them all here
          </div>
          <Button label="+ Add" disabled={!safe && true} />
        </div>
      </div>
    </section>
  );
};

export default SafesRight;
