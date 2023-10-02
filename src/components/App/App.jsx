import { useState, useEffect } from "react";

import "./App.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import NewApplicationModal from "../NewApplicationModal/NewApplicationModal";

function App() {
  // React Hooks
  const [modalOpened, setModalOpened] = useState("");

  /////////////////////////////////////////////////////

  // Open and Close Modal Functions

  const closeModal = () => {
    setModalOpened("");
  };

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscClose);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalOpened("");
    }
  };

  const handleModalOpen = (elementName) => {
    setModalOpened(elementName);
  };

  /////////////////////////////////////////////////////

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main openModal={handleModalOpen} />
      <footer></footer>
      {modalOpened === "new-job-app-modal-opened" && (
        <NewApplicationModal
          isOpen={modalOpened === "new-job-app-modal-opened"}
          addNewJobApp={() =>
            console.log("insert function to submit new job application")
          }
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
