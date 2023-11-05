import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import '../ModalWithForm/ModalWithForm.css';

/* Context Import */
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

/* Primary Components */
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import Main from '../Main/Main';

/* Modal Forms */
import NewApplicationModal from '../NewApplicationModal/NewApplicationModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import EditProfileModal from '../EditProfileModal/EditProfileModal';

/* Util Imports */
import { signin, signup, checkToken, editProfileData } from '../../utils/auth';
import { getJobs, postJobs, deleteJobs } from '../../utils/api';
import ProtectedRoutes from '../../utils/ProtectedRoute';

// import { submittedApplication } from '../../constants/constants';

export default function App() {
  // React Hooks
  const [modalOpened, setModalOpened] = useState('');
  const [applications, setApplications] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  /////////////////////////////////////////////////////

  // Use Effects
  useEffect(() => {
    getJobs()
      .then((data) => {
        setApplications(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscClose);

    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  // Open, Close, and Redirect Modal Functions

  const closeModal = () => {
    setModalOpened('');
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalOpened('');
    }
  };

  const handleModalOpen = (elementName) => {
    setModalOpened(elementName);
  };

  const handleRedirect = (e) => {
    if (e.target === e.currentTarget) {
      if (modalOpened === 'register-modal-opened') {
        setModalOpened('login-modal-opened');
      } else if (modalOpened === 'login-modal-opened') {
        setModalOpened('register-modal-opened');
      }
    }
  };

  // Check token

  function verifyToken() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setIsLoggedIn(true);
          }
        })
        .catch((err) => console.error(err));
    }
  }

  // Submit new application/job information

  const handleSubmitNewApplication = (values) => {
    postJobs(values)
      .then((newJobArray) => {
        setApplications((oldJobArray) => {
          return [newJobArray.data, ...oldJobArray];
        });
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteJobApplication = (element, jobApp) => {
    if (element === 'job-delete') {
      deleteJobs(jobApp)
        .then(() => {
          const newApplicationList = applications.filter((jobs) => {
            return jobs._id !== jobApp;
          });
          setApplications(newApplicationList);
          closeModal();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleUpdateJobAppStatus = (app) => {
    console.log(app.position, 'Job status changed');
  };

  /* -------------------------------------------------------------------------- */
  /*                                User handlers                               */
  /* -------------------------------------------------------------------------- */
  // Sending user info to Database

  const handleUserRegister = (values) => {
    signup(values)
      .then((res) => {
        setCurrentUser(res);
        handleUserLogin(values);
      })
      .then(() => {
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUserLogin = (values) => {
    const { email, password } = values;

    signin({ email, password })
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        verifyToken();
      })
      .then(() => {
        closeModal();
      })
      .catch((err) => console.error(err));
  };

  const handleUserLogout = () => {
    localStorage.removeItem('jwt');
    setCurrentUser({});
    setIsLoggedIn(false);
  };

  // Handle Edit User profile data

  const handleUserProfileData = (data) => {
    editProfileData(data)
      .then((res) => {
        setCurrentUser(res.data);
        closeModal();
      })
      .catch((err) => console.error(err));
  };

  /////////////////////////////////////////////////////
  // Verify token
  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <div className="App">
        <BrowserRouter>
          <Navbar openModal={handleModalOpen} isLoggedIn={isLoggedIn} />
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
              <Route
                path="/profile"
                element={
                  <Main
                    openModal={handleModalOpen}
                    applications={applications}
                    isLoggedIn={isLoggedIn}
                    handleUserLogout={handleUserLogout}
                    handleUpdateJobAppStatus={handleUpdateJobAppStatus}
                    handleDeleteJobApplication={handleDeleteJobApplication}
                  />
                }
              />
            </Route>
            <Route
              path="*"
              element={<p>Oops! You do not have access to this page</p>}
            />
          </Routes>

          <footer></footer>
          {modalOpened === 'new-job-app-modal-opened' && (
            <NewApplicationModal
              isOpen={modalOpened === 'new-job-app-modal-opened'}
              addNewJobApp={handleSubmitNewApplication}
              closeModal={handleCloseModal}
            />
          )}
          {modalOpened === 'register-modal-opened' && (
            <RegisterModal
              isOpen={modalOpened === 'register-modal-opened'}
              onCloseModal={handleCloseModal}
              onRedirect={handleRedirect}
              userRegister={handleUserRegister}
            />
          )}
          {modalOpened === 'login-modal-opened' && (
            <LoginModal
              isOpen={modalOpened === 'login-modal-opened'}
              onCloseModal={handleCloseModal}
              onRedirect={handleRedirect}
              userLogin={handleUserLogin}
            />
          )}
          {modalOpened === 'edit-profile-modal-opened' && (
            <EditProfileModal
              isOpen={modalOpened === 'edit-profile-modal-opened'}
              onCloseModal={handleCloseModal}
              submitEditProfileData={handleUserProfileData}
            />
          )}
        </BrowserRouter>
      </div>
    </CurrentUserContext.Provider>
  );
}
