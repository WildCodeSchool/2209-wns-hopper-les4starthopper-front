import React, { useState, useEffect } from "react";
import ConnexionBtn from "../ConnexionBtn/ConnexionBtn";
import Logo from "../Logo/Logo";
import "./navBar.css";

function NavBar() {
	const [toggleMenu, setToggleMenu] = useState(true);
	const [screenXWidth, setScreenXWidth] = useState(window.innerWidth);

	const toggleSmallDevice = () => {
		setToggleMenu(!toggleMenu);
	};

	useEffect(() => {
		const changeWidth = () => {
			setScreenXWidth(window.innerWidth);

			if (window.innerWidth > 1060) {
				setToggleMenu(false);
			}
		};

		window.addEventListener("resize", changeWidth);

		return () => {
			//to avoid to listen to for nothing
			window.removeEventListener("resize", changeWidth);
		};
	}, []);

	return (
		<nav className='navBar'>
			{(toggleMenu || screenXWidth > 1060) && (
				<div className='mainNavBox'>
					<Logo />

					<ul className='navList'>
						<li className={['items', 'active'].join(' ')}><a href="/">Accueil</a></li>
						<li className={['items', 'active'].join(' ')}><a href="/cities">Villes</a></li>
						<li className={['items', 'active'].join(' ')}><a href="/contact">Contact</a></li>
					</ul>
					
					<ConnexionBtn />
				</div>
			)}

			<button onClick={toggleSmallDevice} className='burgerCross'>
				X
			</button>
		</nav>
	);
}

export default NavBar;
