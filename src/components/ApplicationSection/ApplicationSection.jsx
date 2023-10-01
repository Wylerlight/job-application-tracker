import "./ApplicationSection.css";
import JobCard from "../JobCard/JobCard";

export default function ApplicationSection() {
  return (
    <section className="application__submitted">
      <h2 className="application__submitted-title">Submitted Applications</h2>
      <JobCard />
    </section>
  );
}
