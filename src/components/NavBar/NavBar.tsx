import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from "../Logo/Logo";
import { SearchBar } from "../SearchBar/SearchBar";
import "./navBar.scss";
import DocData from "../Data.json";

//import { ModalAuth } from "../ModalAuth/ModalAuth";
import { Modal } from "../ModalAuth/Modal";
import { log } from "console";
import Signin from "../ConnexionBtn/SignIn";

export const links = [
	{ label: "Accueil", path: "/" },
	{ label: "Villes", path: "/cities" },
	{ label: "Contact", path: "/contact" },
];

interface IProps {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavBar({ ModalVisible, visible }: any) {
	// const [toggleMenu, setToggleMenu] = useState(true);
	// const [screenXWidth, setScreenXWidth] = useState(window.innerWidth);

	// useEffect(() => {
	// 	const changeWidth = () => {
	// 		setScreenXWidth(window.innerWidth);

	// 		if (window.innerWidth > 1060) {
	// 			setToggleMenu(false);
	// 		}
	// 	};

	// 	window.addEventListener("resize", changeWidth);

	// 	return () => {
			
	// 		window.removeEventListener("resize", changeWidth);
	// 	};
	// }, []);

	return (
		<nav className='navBar'>
			<div className='navBar__mainbox'>

				<div className='navBar__mainbox__logo'>
					<Logo />
				</div>

				<ul className='navBar__mainbox__list'>
					{links.map((link) => (
						<CustomLink to={link.path} key={link.label}>
							{link.label}
						</CustomLink>
					))}
				</ul>

				<div className='navBar__mainbox__topbar'>
					<SearchBar placeholder='Entrez' data={[]} />
				</div>

				<div className='navBar__mainbox__cnxbtn'>
					<Signin />
				</div>

			</div>

			{/* <button className='navBar__burgerCross'>X</button> */}
		</nav>
	);
}

function CustomLink({
	to,
	children,
	...props
}: {
	to: string;
	children: any;
}) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({
		path: resolvedPath.pathname,
		end: true,
	});
	return (
		<li
			className={[isActive ? "active" : "", "items"].join(" ")}
			data-testid={`listitem-link-${children}`}
		>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}
