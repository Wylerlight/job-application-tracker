import React from 'react';
import Button from '../Button/Button';

export default function Item({
  apps,
  moveItem,
  deleteConfirmModal,
  handleSelectedCard,
}) {
  const handleMove = (newStatus) => {
    moveItem(apps, newStatus);
  };
  const { _id, name, position, jobId, newDate } = apps;
  return (
    <div className="job">
      <div className="job__info-wrapper">
        <h3 className="job-company__title">{name}</h3>
        <p className="job__line">
          Position: <p className="job-position-alt">{position}</p>
        </p>
        <p className="job__line">
          Job ID: <p className="job-position-alt">{jobId}</p>
        </p>
        <p className="job__line">
          Date Applied: <p className="job-position-alt">{newDate}</p>
        </p>
      </div>
      <div className="job__buttons-wrapper">
        <Button idName={'denied-btn'} onClick={() => handleMove('Denied')}>
          Denied
        </Button>
        <Button
          idName={'interview-btn'}
          onClick={() => handleMove('Interview')}
        >
          Interview
        </Button>
        <Button idName={'applied-btn'} onClick={() => handleMove('Applied')}>
          Applied
        </Button>
        <Button
          onClick={() => {
            console.log('Notes Opened');
          }}
        >
          Notes
        </Button>
        <Button
          onClick={() => {
            deleteConfirmModal('confirmation-opened');
            handleSelectedCard(apps);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
