import { useEffect } from 'react';
import './Profile.css';

const Profile = ({ openModal, handleUserLogout, currentUser }) => {
  return (
    <section className="profile">
      <div className="sidebar__avatar-wrapper">
        {currentUser.profilePicture ? (
          <img
            alt="sidebar__avatar"
            src={`https://api.apptrack.pro/uploads/${currentUser.profilePicture.filename}`}
            // src={`http://localhost:3001/uploads/${currentUser.profilePicture.filename}`}
            className="sidebar__avatar-picture"
          />
        ) : (
          <div className="sidebar__avatar-picture">
            <p id="avatar__picture-replacement">
              {currentUser ? currentUser.name[0] : 'X'}
            </p>
          </div>
        )}
        <p className="sidebar__avatar-name">
          {currentUser ? currentUser.name : 'No Name'}
        </p>
      </div>
      <div className="sidebar__user-wrapper">
        <button
          className="profile__button"
          type="button"
          onClick={() => openModal('new-job-app-modal-opened')}
        >
          New Application
        </button>
        <button
          className="profile__button sidebar__edit-profile"
          type="button"
          onClick={() => {
            openModal('edit-profile-modal-opened');
          }}
        >
          Edit Profile
        </button>
        <button
          className="profile__button sidebar__logout"
          type="button"
          onClick={() => handleUserLogout()}
        >
          Logout
        </button>
      </div>
    </section>
  );
};
export default Profile;
