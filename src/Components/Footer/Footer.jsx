import React from "react";
import "..//Footer/footerStyles.css";
import branchIcon from "..//..//Assets/Images/branch_icon_footer.svg";
import crossIcon from "..//..//Assets/Images/cross_icon_footer.svg";
import alertIcon from "..//..//Assets/Images/alert_icon_footer.svg";
import bellIcon from "..//..//Assets/Images/bell_icon_footer.svg";
import { Stack } from "@mui/material";
function Footer() {
  return (
    <div className="main-block-footer">
      <div className="second-parent-block-footer">
        <Stack direction="row" spacing={1} className="first-block-footer">
          <img src={branchIcon} />
          <p>main</p>
        </Stack>
        <Stack direction="row" spacing={1} className="second-block-footer">
          <img src={crossIcon} />
          <p>0</p>
          <img src={alertIcon} />
          <p>0</p>
        </Stack>
      </div>
      <Stack direction="row" spacing={4} className="third-block-footer">
        <p>Ln 17, Col 25</p>
        <p>UTF-8</p>
        <p>React JS</p>
        <img src={bellIcon} />
      </Stack>
    </div>
  );
}

export default Footer;
