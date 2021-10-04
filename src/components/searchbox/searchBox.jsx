import React from "react";
import searchIcon from "../../assets/images/search.png";
import "./searchbox.css";

const SearchBox = () => {
  return (
    <div className="search-box">
      <img src={searchIcon} alt="search" className="search-box__icon" />
      <input type="text" placeholder="Search" className="search-box__input" />
    </div>
  );
};

export default SearchBox;
