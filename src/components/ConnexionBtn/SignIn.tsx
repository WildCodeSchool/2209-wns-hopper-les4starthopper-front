import React, { useState } from "react";
import { ModalAuth } from "../ModalAuth/ModalAuth";
import "./SignIn.scss";

function ConnexionBtn() {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(!showModal);
		console.log('true');
	};

	return (
		<>
			<button onClick={handleShowModal} className='connexionBtn'>
				Connexion
			</button>
			{showModal && <ModalAuth />}
		</>
	);
}

export default ConnexionBtn;
