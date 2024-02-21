import { Box } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Appbar/appbarStyles.css";
import {
  FileCopyOutlined as FileCopyOutlinedIcon,
  Settings,
  AccountCircleOutlined,
  GitHub,
  Create,
  Code,
  Email,
} from "@mui/icons-material";
function Appbar() {
  const [clickedIcon, setClickedIcon] = useState(null);

  const handleClick = (index) => {
    setClickedIcon(index);
  };
  const icons = [
    { Icon: FileCopyOutlinedIcon, index: 0, path: "/" },
    { Icon: GitHub, index: 1, path: "/github" },
    { Icon: Code, index: 2, path: "/projects" },
    { Icon: Create, index: 3, path: "/blogs" },
    { Icon: Email, index: 4, path: "/contact" },
  ];
  return (
    <Box className="main-block-appbar">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {icons.map(({ Icon, index, path }) => (
          <Link to={path} key={index}>
            <Icon
              key={index}
              className={`icon-appbar ${
                clickedIcon === index ? "clicked" : ""
              }`}
              onClick={() => handleClick(index)}
            />
          </Link>
        ))}
      </Box>
      <Box>
        <Link to="/about">
          <AccountCircleOutlined
            className={`icon-appbar ${clickedIcon === 5 ? "clicked" : ""}`}
            onClick={() => handleClick(5)}
          />
        </Link>
        <Link to="/settings">
          <Settings
            className={`icon-appbar ${clickedIcon === 6 ? "clicked" : ""}`}
            onClick={() => handleClick(6)}
          />
        </Link>
      </Box>
    </Box>
  );
}

export default Appbar;
