import './SubmittedApplication.css';

export default function SubmittedApplication({
  apps,
  handleApplicationUpdate,
}) {
  const { id, name, position, jobId, link, date, status } = apps;

  return (
    <div className="job">
      <div className="job__info-wrapper">
        <a>
          <h3 className="job-company__title">{name}</h3>
        </a>
        <p className="job-position">{position}</p>
        <p className="job-id">{jobId}</p>
        <p className="job-application__submission-date">{date}</p>
      </div>
      <div className="job__buttons-wrapper">
        <button
          className="job__buttons"
          id="job-denied"
          onClick={() => {
            console.log('Sent to Denied');
            console.log(apps);

            handleApplicationUpdate(apps);
          }}
        >
          Denied
        </button>
        <button
          className="job__buttons "
          id="job-interview"
          onClick={() => {
            console.log('Sent to Interview');
          }}
        >
          Interview
        </button>
        <button
          className="job__buttons"
          id="job-notes"
          onClick={() => {
            console.log('Open the notes section');
          }}
        >
          Notes
        </button>
      </div>
    </div>
  );
}
