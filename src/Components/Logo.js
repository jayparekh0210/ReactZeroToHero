import React from "react";
import LogoImg from "../../Images/download.png";

const Logo = () => {
  return (
    <a className="navbar-brand" href="/">
      <img
        src={LogoImg}
        alt="Logo"
        width="60"
        height="60"
        style={{ borderRadius: "100%" }}
        className="d-inline-block align-text-top"
      ></img>
    </a>
  );
};

export default Logo;
