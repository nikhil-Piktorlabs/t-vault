import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../../../components/card/card";
import SafesForm from "../safesform/safesForm";
import SearchBox from "../../../components/searchbox/searchBox";
import { safeDeleted } from "../../../store/safes/actions";
import addIcon from "../../../assets/images/add.png";
import safeIcon from "../../../assets/images/safe-icon.png";
import "./safesleft.css";

const SafesLeft = () => {
  const [showSafeForm, setShowSafeForm] = useState(false);

  const safes = useSelector((s) => s.safes);
  const count = safes.length;

  const dispatch = useDispatch();

  const handleShowSafeForm = () => setShowSafeForm((form) => !form);

  const handleDelete = (id) => {
    dispatch(safeDeleted(id));
  };

  return (
    <article className="safes-left">
      <header className="safes-left__header">
        <h2 className="safes-left__heading">
          All Safes <span className="safes-left__count">({safes.length})</span>
        </h2>
        <SearchBox />
      </header>
      <div className="hl"></div>
      <div
        className={`safes-left__items safes-left__empty${
          count === 0 ? "" : "-not"
        }`}
      >
        {count === 0 ? (
          <div className="safes-left__empty-image">
            <div className="safes-left__caption">
              Create a Safe and get started!
            </div>
          </div>
        ) : (
          safes.map((safe) => (
            <React.Fragment key={safe.id}>
              <Card logo={safeIcon} item={safe} onDelete={handleDelete} />
              <div className="list__separator"></div>
            </React.Fragment>
          ))
        )}
        <img
          src={addIcon}
          alt="add"
          className="safes-left__add-button"
          onClick={() => handleShowSafeForm()}
        />
      </div>
      <SafesForm
        showSafeForm={showSafeForm}
        onShowSafeForm={handleShowSafeForm}
      />
    </article>
  );
};

export default SafesLeft;
