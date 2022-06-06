import React from 'react';
import './FavoriteList.scss';
import SingleFavorite from './SingleFavorite';

const FavoriteList = ({ favorites, setFavorites }) => {
  if (favorites === null) return null;
  return (
    <div className="favorites">
      {favorites.map((favorite) => (
        <SingleFavorite
          favorite={favorite}
          key={favorite.favoriteName}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
};

export default FavoriteList;
