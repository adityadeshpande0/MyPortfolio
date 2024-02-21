import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import "../Appbar/appbarStyles.css";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";

function Appbar() {
  const [clickedIcon, setClickedIcon] = useState(null);

  const handleClick = (index) => {
    setClickedIcon(index);
  };

  return (
    <Box className="main-block-appbar">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <FileCopyOutlinedIcon
          className={`icon-appbar ${clickedIcon === 0 ? "clicked" : ""}`}
          onClick={() => handleClick(0)}
        />
        <FileCopyOutlinedIcon
          className={`icon-appbar ${clickedIcon === 1 ? "clicked" : ""}`}
          onClick={() => handleClick(1)}
        />
        <FileCopyOutlinedIcon
          className={`icon-appbar ${clickedIcon === 2 ? "clicked" : ""}`}
          onClick={() => handleClick(2)}
        />
        <FileCopyOutlinedIcon
          className={`icon-appbar ${clickedIcon === 3 ? "clicked" : ""}`}
          onClick={() => handleClick(3)}
        />
      </Box>
      <Box>
        <FileCopyOutlinedIcon
          className={`icon-appbar ${clickedIcon === 4 ? "clicked" : ""}`}
          onClick={() => handleClick(4)}
        />
        <FileCopyOutlinedIcon
          className={`icon-appbar ${clickedIcon === 5 ? "clicked" : ""}`}
          onClick={() => handleClick(5)}
        />
      </Box>
    </Box>
  );
}

export default Appbar;
