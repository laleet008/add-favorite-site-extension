import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import './Form.scss';

const Form = ({ setIsOpen }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <>
      <div className="dark_background" onClick={() => setIsOpen(false)} />
      <div className="modal">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form_header">
            <h2 className="form_header-heading">Add Your Favorite Site</h2>
          </div>

          <div className="form_content">
            <div className="form_content_input">
              <label>Enter Url:</label>
              <input
                type="text"
                name="url"
                value={inputs.url || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form_content_input">
              <label>Enter website Name:</label>
              <input
                type="text"
                name="website"
                value={inputs.website || ''}
                onChange={handleChange}
              />
            </div>
            <input type="submit" className="submit_btn" />
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
