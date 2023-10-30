import './Main.css';
import Profile from '../Profile/Profile';
import ApplicationSection from '../ApplicationSection/ApplicationSection';

const Main = ({ openModal, applications }) => {
  return (
    <section className="main">
      <Profile openModal={openModal} />
      <ApplicationSection applications={applications} />
    </section>
  );
};
export default Main;
