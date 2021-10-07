import React from "react";
import searchIcon from "../../assets/images/search.png";
import "./searchBox.css";

const SearchBox = ({ seachQuery, onQuery }) => {
  return (
    <div className="search-box">
      <img src={searchIcon} alt="search" className="search-box__icon" />
      <input
        type="text"
        value={seachQuery}
        placeholder="Search"
        className="search-box__input"
        onChange={(e) => onQuery(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
