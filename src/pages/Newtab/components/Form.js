import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import './Form.scss';

const Form = ({
  setIsOpen,
  favorite,
  setFavorite,
  setFavoriteName,
  favoriteName,
  imageIcon,
  setImageIcon,
  handleAdd,
}) => {
  return (
    <>
      <div className="dark_background" onClick={() => setIsOpen(false)} />
      <div className="modal">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
        >
          <div className="form_header">
            <h2 className="form_header-heading">Add Your Favorite Site</h2>
          </div>

          <div className="form_content">
            <div className="form_content_input">
              <label>Enter Url:</label>
              <input
                type="text"
                name="enterUrl"
                value={favorite}
                placeholder="https://www.google.com"
                onChange={(e) => setFavorite(e.target.value)}
              />
            </div>
            <div className="form_content_input">
              <label>Enter website Name:</label>
              <input
                type="text"
                name="websiteName"
                placeholder="google"
                value={favoriteName}
                onChange={(e) => setFavoriteName(e.target.value)}
              />
            </div>
            <div className="form_content_input">
              <label>Icon Url:</label>
              <input
                type="text"
                name="enterUrl"
                value={imageIcon}
                placeholder="https://mages.unsplash.com/photo"
                onChange={(e) => setImageIcon(e.target.value)}
              />
            </div>

            <button type="submit" className="submit_btn">
              Submit
            </button>

            <button className="close_btn" onClick={() => setIsOpen(false)}>
              <RiCloseLine style={{ marginBottom: '-3px' }} />
            </button>
            <div className="form_actions">
              <div className="form_actions-container">
                <button
                  className="form_actions-container-deletebtn"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="form_actions-container-addbtn"
                  onClick={() => setIsOpen(false)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
