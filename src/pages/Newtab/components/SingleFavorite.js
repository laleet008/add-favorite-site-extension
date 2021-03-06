import React from 'react';
import defaultImage from '../assets/default-icon.png';
import './SingleFavorite.scss';
import { RiCloseLine } from 'react-icons/ri';

const SingleFavorite = ({ favorites, favorite, setFavorites }) => {
  const checkImageIconUrl = () => {
    if (favorite.imageIcon) {
      return favorite.imageIcon;
    } else {
      return defaultImage;
    }
  };

  const handleRemove = () => {
    setFavorites(
      favorites.filter((fav) => fav.favoriteName !== favorite.favoriteName)
    );
  };

  return (
    <div className="favorite__single">
      <a target="_blank" href={favorite.favorite} rel="noreferrer">
        <img
          src={checkImageIconUrl()}
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
