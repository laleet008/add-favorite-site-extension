import React from 'react';
import './SingleFavorite.scss';
import { RiCloseLine } from 'react-icons/ri';

const SingleFavorite = ({ favorites, favorite, setFavorites }) => {
  const handleRemove = () => {
    setFavorites(favorites.filter((fav) => fav.id !== favorite.id));
  };

  return (
    <div className="favorite__single">
      <a target="_blank" href={favorite.favorite} rel="noreferrer">
        <img
          src={favorite?.imageIcon}
          alt={favorite.name}
          className="favorite__single-img"
        />
        <div className="favorite__single-name">{favorite.favoriteName}</div>
      </a>

      <div className="favorite__single-deletebtn" onClick={handleRemove}>
        <RiCloseLine />
      </div>
    </div>
  );
};

export default SingleFavorite;
