import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Main.css';
import Profile from '../Profile/Profile';
import ApplicationSection from '../ApplicationSection/ApplicationSection';

const Main = ({
  openModal,
  applications,
  isLoggedIn,
  handleUserLogout,
  handleUpdateJobAppStatus,
  handleDeleteJobApplication,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="main">
      <Profile
        openModal={openModal}
        handleUserLogout={handleUserLogout}
        currentUser={currentUser}
      />

      <ApplicationSection
        applications={applications}
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
        handleUpdateJobAppStatus={handleUpdateJobAppStatus}
        handleDeleteJobApplication={handleDeleteJobApplication}
      />
    </section>
  );
};
export default Main;
