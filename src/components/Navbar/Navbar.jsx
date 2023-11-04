import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Navbar.css';
import logo from '../../assets/facebook_cover_photo_2.png';

import { Link } from 'react-router-dom';

export default function Navbar({ openModal, isLoggedIn }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="navbar">
      <Link to="/">
        <img className="navbar__logo" src={logo} />
      </Link>
      <div className="navbar__links-wrapper">
        {isLoggedIn ? (
          <>
            <p className="avatar__name">
              {currentUser ? currentUser.name : 'No Name'}
            </p>

            <Link to="/profile">
              {currentUser.avatar ? (
                <img
                  alt="avatar"
                  src={currentUser.avatar}
                  className="avatar__picture"
                />
              ) : (
                <div className="avatar__picture">
                  <p id="avatar__picture-replacement">{currentUser.name[0]}</p>
                </div>
              )}
            </Link>
          </>
        ) : (
          <>
            <button
              className="nav avatar__sign-up"
              type="button"
              onClick={() => openModal('register-modal-opened')}
            >
              Sign Up
            </button>
            <button
              className="nav avatar__log-in"
              type="button"
              onClick={() => openModal('login-modal-opened')}
            >
              Log In
            </button>
          </>
        )}
      </div>
    </section>
  );
}
