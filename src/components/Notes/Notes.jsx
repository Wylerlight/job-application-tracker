import React, { useState } from 'react';
import './Notes.css';

const Notes = ({ onCloseModal, submitEditNotes, selectedApp }) => {
  const currentNote = selectedApp.notes;

  const [note, setNote] = useState({ notes: currentNote });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    submitEditNotes(note, id);
  };

  return (
    <section className="modal" onClick={onCloseModal}>
      <div className="notes-modal">
        <button
          className="notes-button_exit"
          type="button"
          onClick={onCloseModal}
        ></button>
        <div className="notes-wrapper">
          <div className="notes-title">Job: {selectedApp.name}</div>
          <textarea
            name="notes"
            className="notes-text_area"
            onChange={handleInputChange}
            value={note.notes}
          ></textarea>
          <button
            className="notes-button"
            type="button"
            onClick={(e) => {
              handleSubmit(e, selectedApp._id);
            }}
          >
            Submit Notes
          </button>
          <button className="notes-button" type="button" onClick={onCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Notes;
