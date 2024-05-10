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
          <img alt="branch" className="icon-footer" src={branchIcon} />
          <a
            href="https://github.com/adityadeshpande0/MyPortfolio"
            className="text-footer"
          >
            main
          </a>
        </Stack>
        <Stack direction="row" spacing={1} className="second-block-footer">
          <img alt="cross" className="icon-footer" src={crossIcon} />
          <p className="text-footer">0</p>
          <img alt="alert" className="icon-footer" src={alertIcon} />
          <p className="text-footer">0</p>
        </Stack>
      </div>
      <Stack direction="row" spacing={4} className="third-block-footer">
        <p className="text-footer">Made in React JS</p>
        <img alt="bell" className="icon-footer" src={bellIcon} />
      </Stack>
    </div>
  );
}

export default Footer;
