import './ApplicationSection.css';
import JobCard from '../JobCard/JobCard';

import InterviewApplications from '../InterviewApplications/InterviewApplications';
import SubmittedApplication from '../SubmittedApplication/SubmittedApplication';
import DeniedApplications from '../DeniedApplications/DeniedApplications';
import { useState } from 'react';

export default function ApplicationSection({
  applications,
  currentUser,
  isLoggedIn,
  handleUpdateJobAppStatus,
  handleDeleteJobApplication,
}) {
  const applicationArr = applications;
  // const appGroups = Object.groupBy(applicationArr, ({ status }) => status);

  // const { applied, denied, interview } = appGroups;

  const [submitApp, setSubmitApp] = useState(applicationArr);

  //Temporary
  const [deniedApp, setDeniedApp] = useState([]);
  const [interviewApp, setInterviewApp] = useState([]);

  return (
    <section className="application__section">
      <JobCard title={'Submitted Applications'}>
        {submitApp.map((apps) => {
          const { _id, name, position, jobId, date } = apps;

          let newDate = new Date(date).toLocaleDateString();
          const newAppsProp = { _id, name, position, jobId, newDate };
          return (
            <SubmittedApplication
              key={apps._id}
              apps={newAppsProp}
              handleUpdateJobAppStatus={handleUpdateJobAppStatus}
              handleDeleteJobApplication={handleDeleteJobApplication}
            />
          );
        })}
      </JobCard>
      <JobCard title={'Interviews'}>
        {interviewApp.map((apps) => {
          return <InterviewApplications key={apps.id} apps={apps} />;
        })}
      </JobCard>
      <JobCard title={'Denied Applications'}>
        {deniedApp.map((apps) => {
          return <DeniedApplications key={apps.id} apps={apps} />;
        })}
      </JobCard>
    </section>
  );
}
