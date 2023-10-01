import "./JobCard.css";

export default function JobCard() {
  return (
    <section className="job-wrapper">
      <div className="job">
        <div className="job__info-wrapper">
          <a>
            <h3 className="job-company__title">Insert Company Name</h3>
          </a>
          <p className="job-position">Insert Position</p>
          <p className="job-application__submission-date">
            Insert date applied
          </p>
        </div>
        <div className="job__buttons-wrapper">
          <button
            className="job__buttons"
            id="job-denied"
            onClick={() => {
              console.log("Sent to Denied");
            }}
          >
            Denied
          </button>
          <button
            className="job__buttons "
            id="job-interview"
            onClick={() => {
              console.log("Sent to Interview");
            }}
          >
            Interview
          </button>
          <button
            className="job__buttons"
            id="job-notes"
            onClick={() => {
              console.log("Open the notes section");
            }}
          >
            Notes
          </button>
        </div>
      </div>
    </section>
  );
}
