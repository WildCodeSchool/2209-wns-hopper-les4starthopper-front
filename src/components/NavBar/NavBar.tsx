import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Signin from "../../components/ConnexionBtn/SignIn";
import Logo from "../Logo/Logo";
import { MainSearchBar } from "../SearchBar/MainSearchBar";
import "./navBar.scss";
import DocData from "../Data.json";
import { ModalAuth } from "../ModalAuth/ModalAuth";

export const links = [
	{ label: "Accueil", path: "/" },
	{ label: "Villes", path: "/cities" },
	{ label: "Contact", path: "/contact" },
	{ label: "Signup", path: "/signup" },
];

interface IProps {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavBar() {
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
				<div className='navBar__mainbox'>
					<Logo />

					<ul className={"navBar__mainbox__list"}>
						{links.map((link) => (
							<CustomLink to={link.path} key={link.label}>
								{link.label}
							</CustomLink>
						))}
					</ul>
					<Signin />
				</div>
			)}

			<button onClick={toggleSmallDevice} className='navBar__burgerCross'>
				X
			</button>
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
