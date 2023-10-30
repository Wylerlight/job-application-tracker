import './ApplicationSection.css';
import JobCard from '../JobCard/JobCard';

import InterviewApplications from '../InterviewApplications/InterviewApplications';
import SubmittedApplication from '../SubmittedApplication/SubmittedApplication';
import DeniedApplications from '../DeniedApplications/DeniedApplications';
import { useState } from 'react';

export default function ApplicationSection({ applications }) {
  const applicationArr = applications;
  const appGroups = Object.groupBy(applicationArr, ({ status }) => status);

  const { applied, denied, interview } = appGroups;

  const [submitApp, setSubmitApp] = useState(applied);
  const [deniedApp, setDeniedApp] = useState(denied);
  const [interviewApp, setInterviewApp] = useState(interview);

  /* Handler functions */

  const handleApplicationUpdate = (item) => {
    console.log(item.status);
    console.log('denied button clicked');
  };

  return (
    <section className="application__section">
      <JobCard title={'Submitted Applications'}>
        {submitApp.map((apps) => {
          return (
            <SubmittedApplication
              key={apps.id}
              apps={apps}
              handleApplicationUpdate={handleApplicationUpdate}
            />
          );
        })}
      </JobCard>
      <JobCard title={'Interviews'}>
        {interview.map((apps) => {
          return <InterviewApplications key={apps.id} apps={apps} />;
        })}
      </JobCard>
      <JobCard title={'Denied Applications'}>
        {denied.map((apps) => {
          return <DeniedApplications key={apps.id} apps={apps} />;
        })}
      </JobCard>
    </section>
  );
}
