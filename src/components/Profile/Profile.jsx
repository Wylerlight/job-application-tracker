import "./Profile.css";

export default function Profile() {
  return (
    <section className="profile">
      <button
        className="profile-new_application-button"
        type="button"
        onClick={() => {
          console.log("New app button clicked");
        }}
      >
        New Application
      </button>
    </section>
  );
}
