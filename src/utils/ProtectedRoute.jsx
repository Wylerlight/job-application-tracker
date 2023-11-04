import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const ProtectedRoutes = () => {
  const { isLoggedIn } = useContext(CurrentUserContext);
  console.log(isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
