import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Signin from "../Signin/Signin";
import Logo from "../Logo/Logo";
import "./navBar.css";

export const links = [
  { label: "Accueil", path: "/" },
  { label: "Villes", path: "/cities" },
  { label: "Contact", path: "/contact" },
  { label: "Signup", path: "/signup" },
];

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
    <nav className="navBar">
      {(toggleMenu || screenXWidth > 1060) && (
        <div className="mainNavBox">
          <Logo />

          <ul className="navList">
            {links.map((link) => (
              <CustomLink to={link.path} key={link.label}>
                {link.label}
              </CustomLink>
            ))}
          </ul>
          <Signin />
        </div>
      )}

      <button onClick={toggleSmallDevice} className="burgerCross">
        X
      </button>
    </nav>
  );
}

function CustomLink({ to, children, ...props }: { to: string; children: any }) {
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
