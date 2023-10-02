/* eslint-disable react/prop-types */
import "./Profile.css";

const Profile = ({ openModal }) => {
  return (
    <section className="profile">
      <button
        className="profile-new_application-button"
        type="button"
        onClick={() => openModal("new-job-app-modal-opened")}
      >
        New Application
      </button>
    </section>
  );
};
export default Profile;
