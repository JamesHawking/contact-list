import React from "react";
import SearchIcon from "../static/icons/search-outline.svg";

export default ({ handleSearch, searchInput }) => {
  return (
    <div className="search">
      <img src={SearchIcon} alt="Search Icon" height="16" />
      <input
        onChange={handleSearch}
        value={searchInput}
        className="search__input"
        type="text"
        placeholder="Search your friends"
      />
    </div>
  );
};
