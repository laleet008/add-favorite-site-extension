import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="search__bar">
      <div className="search__bar-container">
        <FcGoogle className="search__bar-container-google" />
        <input type="search" placeholder="Search...." />
        <FaSearch className="search__bar-container-search" />
      </div>
    </div>
  );
};

export default SearchBar;
