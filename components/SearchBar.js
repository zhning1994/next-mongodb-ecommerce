import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="search-box group hover:w-60">
      <input
        type="text"
        placeholder="Search here"
        className="search-input group-hover:w-48"
      />
      <a className="search-btn group-hover:bg-[#00296b] group-hover:text-white">
        <FiSearch />
      </a>
    </div>
  );
};

export default SearchBar;
