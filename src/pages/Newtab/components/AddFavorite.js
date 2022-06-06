import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './AddFavorite.scss';

const AddFavorite = () => {
  return (
    <div className="add_favorite">
      <button className="add_favorite-button">
        <FaPlus />
      </button>
    </div>
  );
};

export default AddFavorite;
