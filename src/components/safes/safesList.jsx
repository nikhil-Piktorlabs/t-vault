import React from "react";
import SearchBox from "../common/searchBox";
import addIcon from "../../images/add.png";

const SafesList = () => {
  return (
    <article className="safes-list">
      <header className="safes-list__header">
        <h2 className="safes-list__heading">All Safes</h2>
        <SearchBox />
      </header>
      <div className="hl"></div>
      <div className="safes-list__empty">
        <div className="safes-list__empty-image">
          <div className="safes-list__caption">
            Create a Safe and get started!
          </div>
        </div>
        <img src={addIcon} alt="add" className="safes-list__add-button" />
      </div>
    </article>
  );
};

export default SafesList;
