import "./Header.css";

export default function Header({ submitted, interview, denied }) {
  return (
    <div className="header">
      <div>Applications Submitted: {submitted ? submitted : 0}</div>
      <div>Interviews Pending: {interview ? interview : 0}</div>
      <div>Applications Denied: {denied ? denied : 0}</div>
    </div>
  );
}
