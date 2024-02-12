import React from "react";
import vs_icon from "..//..//Assets/Images/vs-code-image.svg";

function Navbar() {
  const navLinks = ["file", "edid", "view", "go", "run", "terminal", "help"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#252526",
      }}
    >
      <div>
        <img
          src={vs_icon}
          alt="vs-code"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        {navLinks.map((links) => (
          <p
            style={{
              color: "#ffff",
              textTransform: "capitalize",
              margin:"5px"
            }}
          >
            {links}
          </p>
        ))}
      </div>
      <div>
        <p>Aditya Deshpande - Portfolio</p>
      </div>
    </div>
  );
}

export default Navbar;
