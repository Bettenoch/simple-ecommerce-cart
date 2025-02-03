// components/SearchBar.js
import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";
import '../../search-bar.css'

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        className="search-box"
      />
    </div>
  );
};

export default SearchBar;
