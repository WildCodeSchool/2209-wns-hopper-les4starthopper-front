import React from "react";
import { MainSearchBar } from "../SearchBar/MainSearchBar";
import WelcomeTitle from "../WelcomeTitle/WelcomeTitle";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      <WelcomeTitle />
      <MainSearchBar placeholder={""} data={[]} />
      <Outlet />
      {children}
    </div>
  );
};

export default Layout;
