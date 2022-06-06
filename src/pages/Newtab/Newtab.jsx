import React, { useEffect, useState } from 'react';

import AddFavorite from './components/AddFavorite';
import SearchBar from './components/SearchBar';
import './Newtab.css';
import './Newtab.scss';
import Form from './components/Form';
import FavoriteList from './components/FavoriteList';

// const getLocalItems = () => {
//   let favorite = localStorage.getItem('favorites');
//   console.log(favorite);

//   if (favorite) {
//     return JSON.stringify(localStorage.getItem('favorites'));
//   }
// };

const Newtab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [favorite, setFavorite] = useState('');
  const [favoriteName, setFavoriteName] = useState('');
  const [imageIcon, setImageIcon] = useState('');
  const [favorites, setFavorites] = useState([]);

  const handleAdd = () => {
    if (favorite && favoriteName) {
      setFavorites([...favorites, { favorite, favoriteName, imageIcon }]);
      setFavorite('');
      setFavoriteName('');
      setImageIcon('');
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const data = window.localStorage.getItem('favorites_data');
    setFavorites(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('favorites_data', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="extension">
      <div className="extension_add-button " onClick={() => setIsOpen(true)}>
        <AddFavorite />
      </div>
      {isOpen && (
        <Form
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          favorite={favorite}
          setFavorite={setFavorite}
          favoriteName={favoriteName}
          setFavoriteName={setFavoriteName}
          imageIcon={imageIcon}
          setImageIcon={setImageIcon}
          handleAdd={handleAdd}
        />
      )}
      <div className="favorite__site">
        <FavoriteList favorites={favorites} setFavorites={setFavorites} />
      </div>

      <div className={`search__container ${isOpen ? 'search_isOpen' : ''}`}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Newtab;
