import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import '..//Popups/recruiterAlertStyles.css'
function RecruiterAlert() {
  return (
    <Paper>
      <div className="top-block-alert">
        <InfoOutlinedIcon className="logo-alert" />
        <Typography className="top-text-alert" >are you a recruiter ?</Typography>
      </div>
      <div
      className="bottom-block-alert"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Typography className="bottom-text-alert">download my resume</Typography>
        <div>
          <Button className="button-alert" variant="contained" disableElevation="true">
            yes
          </Button>
          <Button className="button-alert" disableElevation="true">no</Button>
        </div>
      </div>
    </Paper>
  );
}

export default RecruiterAlert;
