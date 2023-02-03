import React, { useEffect, useState } from "react";
import { ModalAuth } from "../ModalAuth/ModalAuth";
import "./SignIn.scss";

function ConnexionBtn() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const closeModal = (e: any) => {
      if (
        e.target.className !== "connexionBtn" &&
        !e.target.classList.contains("modalAuth")
      ) {
        setShowModal(false);
      }
    };
    document.body.addEventListener("click", closeModal);
    return () => document.body.removeEventListener("click", closeModal);
  }, []);

  return (
    <>
      <button onClick={handleShowModal} className="connexionBtn">
        Connexion
      </button>
      {showModal && (
        <ModalAuth
          className={showModal === true ? "modal-open" : "modal-closed"}
        />
      )}
    </>
  );
}

export default ConnexionBtn;
