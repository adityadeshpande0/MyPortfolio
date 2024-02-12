import React from "react";
import vs_icon from "..//..//Assets/Images/vs-code-image.svg";
import "../Navbar/navbarStyles.css";
function Navbar() {
  const navLinks = ["file", "edit", "view", "go", "run", "terminal", "help"];

  return (
    <div className="mainblock-navbar">
      <img src={vs_icon} alt="vs-code" className="logo-navbar" />
      <div className="linkblock-navbar">
        {navLinks.map((links) => (
          <p className="linktext-navbar">{links}</p>
        ))}
      </div>
      <div className="titleblock-navbar">
        <p className="title-navbar">Aditya Deshpande - Portfolio</p>
      </div>
    </div>
  );
}

export default Navbar;
