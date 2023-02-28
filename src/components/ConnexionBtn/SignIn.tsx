import React, { useEffect, useState } from "react";
import { ModalAuth } from "../ModalAuth/ModalAuth";
import "./SignIn.scss";

function ConnexionBtn() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className="button_wrapper_styles" >
      <button className="connexionBtn" onClick={() => setIsOpen(true)} >
        Connexion
      </button>
    </div>
      {/* <ModalAuth /> */}

      <ModalAuth open={isOpen} onClose={() => setIsOpen(false)}>
        This is a modal
      </ModalAuth>
   </>


  );
}

export default ConnexionBtn;
