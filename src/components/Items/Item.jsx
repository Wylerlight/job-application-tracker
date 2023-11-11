import React from "react";
import Button from "../Button/Button";

export default function Item({ apps, moveItem, deleteApp }) {
  const handleMove = (newStatus) => {
    moveItem(apps, newStatus);
  };
  const { _id, name, position, jobId, newDate } = apps;
  return (
    <div className="job">
      <div className="job__info-wrapper">
        <a>
          <h3 className="job-company__title">{name}</h3>
        </a>
        <p className="job-position">
          Position: <p className="job-position-alt">{position}</p>
        </p>
        <p className="job-id">
          Job ID: <p className="job-position-alt">{jobId}</p>
        </p>
        <p className="job-application__submission-date">
          Date Applied: <p className="job-position-alt">{newDate}</p>
        </p>
      </div>
      <div className="job__buttons-wrapper">
        <Button idName={"denied-btn"} onClick={() => handleMove("Denied")}>
          Denied
        </Button>
        <Button
          idName={"interview-btn"}
          onClick={() => handleMove("Interview")}
        >
          Interview
        </Button>
        <Button idName={"applied-btn"} onClick={() => handleMove("Applied")}>
          Applied
        </Button>
        <Button
          onClick={() => {
            console.log("Notes Opened");
          }}
        >
          Notes
        </Button>
        <Button
          onClick={() => {
            deleteApp(apps._id);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
