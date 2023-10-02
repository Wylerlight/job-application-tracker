import "./Navbar.css";
import logo from "../../assets/facebook_cover_photo_2.png";

export default function Navbar() {
  return (
    <section className="navbar">
      <img className="navbar__logo" src={logo} />

      <div className="navbar__links-wrapper">
        <a className="navbar__link">Page Link</a>
        <div className="navbar__profile">
          <p className="navbar__profile-picreplace">T</p>
        </div>
      </div>
    </section>
  );
}
