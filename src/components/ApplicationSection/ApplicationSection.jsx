import React from 'react';
import './ApplicationSection.css';

import Table from '../Table/Table';

export default function ApplicationSection({
  applications,
  currentUser,
  isLoggedIn,
  handleUpdateJobAppStatus,
  openModal,
  handleSelectedCard,
}) {
  const statusArray = ['Applied', 'Denied', 'Interview'];
  return (
    <section className="application__section">
      {statusArray.map((category) => {
        return (
          <React.Fragment key={category}>
            <Table
              category={category}
              applications={applications.filter(
                (item) => item.status === category
              )}
              moveItem={handleUpdateJobAppStatus}
              openModal={openModal}
              handleSelectedCard={handleSelectedCard}
            />
          </React.Fragment>
        );
      })}
    </section>
  );
}
