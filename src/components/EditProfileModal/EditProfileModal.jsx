import React, { useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

const EditProfileModal = ({ isOpen, onCloseModal, submitEditProfileData }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [inputValues, setInputValues] = useState(currentUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setInputValues({ ...inputValues, profilePicture: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEditProfileData(inputValues);
  };

  return (
    <ModalWithForm
      title="Change profile data"
      name="edit-profile"
      buttonText="Save changes"
      buttonRedirectText=""
      redirect={() => {}}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      {/* Name input */}
      <div className="modal__input">
        <label htmlFor="modal__input-edit-name">Name*</label>
        <input
          id="modal__input-edit-name"
          className="modal__input-form"
          name="name"
          type="text"
          placeholder="Name"
          value={inputValues.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <span className=""></span>
      {/* Avatar input */}
      <div className="modal__input">
        <label htmlFor="modal__input-edit-avatar">Profile Image</label>
        <input
          name="profilePicture"
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          onChange={handleFileChange}
        />
      </div>
      <span className=""></span>
    </ModalWithForm>
  );
};

export default EditProfileModal;
