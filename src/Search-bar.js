import React from "react";
import "./styles.css";
import { func } from "prop-types";

export default function SearchBar(props) {
  const { keywordSearch } = props;

  function handleChange(e) {
    e.persist();
    keywordSearch(e.target.value);
  }

  return (
    <div className="search-bar">
      <input
        onChange={handleChange}
        className="search-bar-input"
        type="text"
        name="search-bar"
        placeholder=" Type your keyword here!"
      />
    </div>
  );
}

SearchBar.propTypes = {
  keywordSearch: func.isRequired
};
