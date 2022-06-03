import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Form from './Form';
import './AddFavorite.scss';

const AddFavorite = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="add_favorite">
      <button className="add_favorite-button" onClick={() => setIsOpen(true)}>
        <FaPlus />
      </button>
      {isOpen && <Form setIsOpen={setIsOpen} />}
    </div>
  );
};

export default AddFavorite;
