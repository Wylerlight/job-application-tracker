/* eslint-disable react/prop-types */
import { useState } from 'react';
import './NewApplicationModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

export default function NewApplicationModal({
  isOpen,
  addNewJobApp,
  closeModal,
}) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [jobId, setJobId] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleJobIdChange = (e) => {
    setJobId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewJobApp({ name, position, jobId, status: 'applied' });
  };

  return (
    <ModalWithForm
      title="New Job Application"
      name="job"
      buttonText="Add New Application"
      onClose={closeModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <div className="modal__input">
        Company Name
        <input
          id="modal__input-name"
          className="modal__input-form"
          name="name"
          type="text"
          placeholder="Company Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <span className=""></span>
      {/* Position Input */}
      <div className="modal__input">
        Position
        <input
          id="modal__input-position"
          className="modal__input-form"
          name="position"
          type="text"
          placeholder="Position"
          value={position}
          onChange={handlePositionChange}
          required
        />
      </div>
      <span className=""></span>
      {/* Job Id Input */}
      <div className="modal__input">
        Job ID
        <input
          id="modal__input-jobId"
          className="modal__input-form"
          name="jobId"
          type="text"
          placeholder="Job ID"
          value={jobId}
          onChange={handleJobIdChange}
        />
      </div>
      <span className=""></span>
    </ModalWithForm>
  );
}
