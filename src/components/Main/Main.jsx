import "./Main.css";
import Profile from "../Profile/Profile";
import ApplicationSection from "../ApplicationSection/ApplicationSection";

export default function Main() {
  return (
    <section className="main">
      <Profile />
      <ApplicationSection />
    </section>
  );
}
