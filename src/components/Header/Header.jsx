import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Header.css";

export default function Header({ submitted, interview, denied }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  return (
    <>
      {isLoggedIn ? (
        <div className="header">
          <div className="header__counter">
            Applications Submitted: {submitted ? submitted : 0}
          </div>
          <div className="header__counter">
            Interviews Pending: {interview ? interview : 0}
          </div>
          <div className="header__counter">
            Applications Denied: {denied ? denied : 0}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
