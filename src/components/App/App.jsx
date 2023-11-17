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
import Footer from '../Footer/Footer';

/* Modal Forms */
import NewApplicationModal from '../NewApplicationModal/NewApplicationModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import EditProfileModal from '../EditProfileModal/EditProfileModal';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';
/* Util Imports */
import { signin, signup, checkToken, editProfileData } from '../../utils/auth';
import {
  getJobs,
  postJobs,
  deleteJobs,
  updateJobStatus,
} from '../../utils/api';
import ProtectedRoute from '../../utils/ProtectedRoute';

export default function App() {
  // React Hooks
  const [modalOpened, setModalOpened] = useState('');

  ////////
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState({});
  ////////

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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

  // Designate occurences of user specific apps
  const [userItemCount, setUserItemCount] = useState(0);
  const [userStatusCounts, setUserStatusCounts] = useState({
    Applied: 0,
    Interview: 0,
    Denied: 0,
  });

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
            setIsLoading(false);
          }
        })
        .catch((err) => console.error(err));
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                   Submit new application/job information                   */
  /* -------------------------------------------------------------------------- */

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

  const handleDeleteJobApplication = (jobApp) => {
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
  };
  const handleUpdateJobAppStatus = (apps, newStatus) => {
    const id = apps._id;

    updateJobStatus(apps, newStatus, id)
      .then(() =>
        getJobs().then((data) => {
          setApplications(data.data);
        })
      )
      .catch((err) => {
        console.log(err);
      });
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
  // Update and display app counts
  // Function to filter items created by the current user
  const filterUserItems = () => {
    const userItems = applications.filter(
      (apps) => apps.owner === currentUser?._id
    );
    setUserItemCount(userItems.length);

    // Initialize status counts
    const statusCounts = { Applied: 0, Interview: 0, Denied: 0 };

    // Count the items for each status
    userItems.forEach((item) => {
      statusCounts[item.status]++;
    });

    // Update the userStatusCounts state
    setUserStatusCounts(statusCounts);
  };

  const handleSelectedCard = (app) => {
    setSelectedApp(app);
  };

  // Use useEffect to update counts when the component mounts or when the items change
  useEffect(() => {
    filterUserItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applications]);

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
          <Header apps={userStatusCounts} />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route
              exact
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Main
                    openModal={handleModalOpen}
                    applications={applications}
                    isLoggedIn={isLoggedIn}
                    handleUserLogout={handleUserLogout}
                    handleUpdateJobAppStatus={handleUpdateJobAppStatus}
                    deleteConfirmModal={handleModalOpen}
                    handleSelectedCard={handleSelectedCard}
                    isLoading={isLoading}
                  />
                </ProtectedRoute>
              }
            />

            <Route
              path="*"
              element={<p>Oops! You do not have access to this page</p>}
            />
          </Routes>
          <Footer />

          {modalOpened === 'confirmation-opened' && (
            <DeleteConfirmationModal
              onClose={handleCloseModal}
              selectedApp={selectedApp}
              handleDeleteJobApplication={handleDeleteJobApplication}
            />
          )}

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
