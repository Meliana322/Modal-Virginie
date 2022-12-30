import React, { useState } from "react";
import "./App.css";
import Modal from "./lib/components/modal";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => setIsOpenModal(!isOpenModal);
 

  return (
    <>
      <main>
        <button className="btn-click" onClick={toggleModal}>
          CLICK ME
        </button>

          <Modal background close onClose={toggleModal} isOpen={isOpenModal}>
            <p>Your Message here !</p>
          </Modal>
      
      </main>
    </>
  );
}

export default App;
