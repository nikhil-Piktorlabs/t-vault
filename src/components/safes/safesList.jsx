import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../card/card";
import AddSafe from "../forms/addSafe";
import SearchBox from "../common/searchBox";
import addIcon from "../../images/add.png";
import safeIcon from "../../images/safe-icon.png";

const SafesList = () => {
  const [showForm, setShowForm] = useState(false);

  const safes = useSelector((s) => s.safes);
  const count = safes.length;

  const handleShowForm = () => setShowForm((form) => !form);

  return (
    <article className="safes-list">
      <header className="safes-list__header">
        <h2 className="safes-list__heading">All Safes</h2>
        <SearchBox />
      </header>
      <div className="hl"></div>
      <div
        className={`safes-list__items safes-list__empty${
          count === 0 ? "" : "-not"
        }`}
      >
        {count === 0 ? (
          <div className="safes-list__empty-image">
            <div className="safes-list__caption">
              Create a Safe and get started!
            </div>
          </div>
        ) : (
          safes.map((safe) => (
            <React.Fragment key={safe.id}>
              <Card logo={safeIcon} item={safe} />
              <div className="list__separator"></div>
            </React.Fragment>
          ))
        )}
        <img
          src={addIcon}
          alt="add"
          className="safes-list__add-button"
          onClick={() => handleShowForm()}
        />
      </div>
      <AddSafe showForm={showForm} onShowForm={handleShowForm} />
    </article>
  );
};

export default SafesList;
