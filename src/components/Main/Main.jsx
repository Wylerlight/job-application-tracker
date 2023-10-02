/* eslint-disable react/prop-types */

import "./Main.css";
import Profile from "../Profile/Profile";
import ApplicationSection from "../ApplicationSection/ApplicationSection";

const Main = ({ openModal }) => {
  return (
    <section className="main">
      <Profile openModal={openModal} />
      <ApplicationSection />
    </section>
  );
};
export default Main;
