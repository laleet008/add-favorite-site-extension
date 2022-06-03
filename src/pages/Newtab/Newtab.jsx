import React from 'react';

import AddFavorite from './components/AddFavorite';
import SearchBar from './components/SearchBar';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  return (
    <div className="extension">
      <div className="extension_add-button">
        <AddFavorite />
      </div>
      <div className="search__container">
        <SearchBar />
      </div>
    </div>
  );
};

export default Newtab;
