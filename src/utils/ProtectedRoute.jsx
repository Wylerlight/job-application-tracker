import { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
