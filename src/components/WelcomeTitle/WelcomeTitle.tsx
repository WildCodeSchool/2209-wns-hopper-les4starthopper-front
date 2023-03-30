import React from "react";
import s from "./welcomeTitle.module.css";

const WelcomeTitle = () => {
	return (
		<div className={s.welcomeTitle}>
			<span>Bienvenue sur City Guide !</span> Voyage sans contraintes{" "}
			<br /> à travers notre carte de France !
		</div>
	);
};

export default WelcomeTitle;
