import { Paper, Typography } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "..//Popups/recruiterAlertStyles.css";
function RecruiterAlert() {
  return (
    <Paper>
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
        <div>
          <button className="button-alert">yes</button>
          <button className="button-alert">no</button>
        </div>
      </div>
    </Paper>
  );
}

export default RecruiterAlert;
