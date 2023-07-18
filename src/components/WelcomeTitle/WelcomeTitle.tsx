import React from "react";
import "./welcomeTitle.scss";

const WelcomeTitle = () => {
	return (
		<section className="title">
		<div className="welcomeTitle">
			<span>Bienvenue sur City Guide !</span> Voyage sans contraintes{" "}
			<br /> à travers notre carte de France !
		</div>
		</section>
	);
};

export default WelcomeTitle;
