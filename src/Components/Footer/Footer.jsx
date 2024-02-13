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
          <img className="icon-footer" src={branchIcon} />
          <p className="text-footer">main</p>
        </Stack>
        <Stack direction="row" spacing={1} className="second-block-footer">
          <img className="icon-footer" src={crossIcon} />
          <p className="text-footer">0</p>
          <img className="icon-footer" src={alertIcon} />
          <p className="text-footer">0</p>
        </Stack>
      </div>
      <Stack direction="row" spacing={4} className="third-block-footer">
        <p className="text-footer">Ln 17, Col 25</p>
        <p className="text-footer">UTF-8</p>
        <p className="text-footer">React JS</p>
        <img className="icon-footer" src={bellIcon} />
      </Stack>
    </div>
  );
}

export default Footer;
