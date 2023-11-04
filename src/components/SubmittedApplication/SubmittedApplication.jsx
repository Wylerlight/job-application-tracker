import './SubmittedApplication.css';

export default function SubmittedApplication({
  apps,
  handleUpdateJobAppStatus,
  handleDeleteJobApplication,
}) {
  const { _id, name, position, jobId, newDate } = apps;

  return (
    <div className="job">
      <div className="job__info-wrapper">
        <a>
          <h3 className="job-company__title">{name}</h3>
        </a>
        <p className="job-position">Position: {position}</p>
        <p className="job-id">Job ID: {jobId}</p>
        <p className="job-application__submission-date">
          Date Applied: {newDate}
        </p>
      </div>
      <div className="job__buttons-wrapper">
        <button
          className="job__buttons"
          id="job-denied"
          onClick={() => {
            handleUpdateJobAppStatus(apps);
          }}
        >
          Denied
        </button>
        <button
          className="job__buttons "
          id="job-interview"
          onClick={() => {
            handleUpdateJobAppStatus(apps);
          }}
        >
          Interview
        </button>
        <button
          className="job__buttons"
          id="job-notes"
          onClick={() => {
            console.log('Notes Opened');
          }}
        >
          Notes
        </button>
        <button
          className="job__buttons"
          id="job-delete"
          onClick={(e) => {
            let element = e.target.id;
            handleDeleteJobApplication(element, apps._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
