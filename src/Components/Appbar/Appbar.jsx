import { Box } from "@mui/material";
import React, { useState } from "react";
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
    { Icon: FileCopyOutlinedIcon, index: 0 },
    { Icon: GitHub, index: 1 },
    { Icon: Code, index: 2 },
    { Icon: Create, index: 3 },
    { Icon: Email, index: 4 },
  ];
  return (
    <Box className="main-block-appbar">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {icons.map(({ Icon, index }) => (
          <Icon
            key={index}
            className={`icon-appbar ${clickedIcon === index ? "clicked" : ""}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </Box>
      <Box>
        <AccountCircleOutlined
          className={`icon-appbar ${clickedIcon === 5 ? "clicked" : ""}`}
          onClick={() => handleClick(5)}
        />
        <Settings
          className={`icon-appbar ${clickedIcon === 6 ? "clicked" : ""}`}
          onClick={() => handleClick(6)}
        />
      </Box>
    </Box>
  );
}

export default Appbar;
