import { Outlet, Navigate } from 'react-router';

const ProtectedRoutes = (isLoggedIn) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
