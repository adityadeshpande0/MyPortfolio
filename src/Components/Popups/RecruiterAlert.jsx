import { Paper, Typography } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "..//Popups/recruiterAlertStyles.css";
function RecruiterAlert() {
  return (
    <div className="main-block-alert">
      <div className="top-block-alert">
        <InfoOutlinedIcon className="logo-alert" />
        <Typography className="top-text-alert">
          are you a recruiter ?
        </Typography>
      </div>
      <div className="bottom-block-alert">
        <Typography className="bottom-text-alert">
          download my resume
        </Typography>
        <div className="button-block-alert">
          <button className="button-alert">yes</button>
          <button className="button-alert">no</button>
        </div>
      </div>
    </div>
  );
}

export default RecruiterAlert;
