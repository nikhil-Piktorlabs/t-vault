import React from "react";
import searchIcon from "../../images/search.png";

const SearchBox = () => {
  return (
    <div className="input-group">
      <img src={searchIcon} alt="search" className="input-icon" />
      <input type="text" placeholder="Search" className="input" />
    </div>
  );
};

export default SearchBox;
