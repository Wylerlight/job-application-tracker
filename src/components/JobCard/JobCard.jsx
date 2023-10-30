/* eslint-disable react/prop-types */

import './JobCard.css';

export default function JobCard({ children, title }) {
  return (
    <div className="job__wrapper">
      <h2 className="job__application-title">{title}</h2>
      <section className="job__cards">{children}</section>
    </div>
  );
}
