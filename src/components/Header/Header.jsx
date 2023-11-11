import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Header.css";

export default function Header({ apps }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { Applied, Interview, Denied } = apps;
  return (
    <>
      {isLoggedIn ? (
        <div className="header">
          <div className="header__counter">
            Applications Submitted: {Applied ? Applied : 0}
          </div>
          <div className="header__counter">
            Interviews Pending: {Interview ? Interview : 0}
          </div>
          <div className="header__counter">
            Applications Denied: {Denied ? Denied : 0}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
