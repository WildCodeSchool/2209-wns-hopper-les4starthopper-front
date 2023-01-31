import React from "react";
import "./logo.scss";
import CityLogo from "../../assets/images/cityGuideLogo.png";

const Logo = () => {
  return (
    <div className="logoBox">
      <img src={CityLogo} alt="" />
    </div>
  );
};

export default Logo;
