import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "..//Sidepanel/sidepanelStyles.css";
import reactIcon from "..//..//Assets/Images/icon_react_sidepanel.svg";
import jsIcon from "..//..//Assets/Images/icon_javascript_sidepanel.svg";
import htmlIcon from "..//..//Assets/Images/icon_html_sidepanel.svg";
import cssIcon from "..//..//Assets/Images/icon_css_sidepanel.svg";
import jsonIcon from "..//..//Assets/Images/icon_json_sidepanel.svg";
import mdgitIcon from "..//..//Assets/Images/icon_mdgit_sidepanel.svg";
function Sidepanel() {
  const [collapsed, setCollapsed] = useState(false); // State to manage collapse/expand

  const data = [
    { id: 1, title: "home.jsx", imageURL: reactIcon },
    { id: 2, title: "about.html", imageURL: htmlIcon },
    { id: 3, title: "projects.js", imageURL: jsIcon },
    { id: 4, title: "contact.css", imageURL: cssIcon },
    { id: 5, title: "blogs.json", imageURL: jsonIcon },
    { id: 6, title: "github.md", imageURL: mdgitIcon },
  ];

  const toggleCollapse = () => {
    setCollapsed(!collapsed); // Toggles collapse state
  };

  return (
    <div className="main-block-sidepanel">
      <div className="explore-sidepanel">
        <p className="text-explore-sidepanel">explorer</p>
        <MoreHorizIcon
          className="three-dots-sidepanel"
          style={{ color: "#CCCCCC", cursor: "pointer" }}
        />
      </div>
      <div>
        <div className="explore-block-sidepanel" onClick={toggleCollapse}>
          {collapsed ? (
            <KeyboardArrowDownIcon style={{ color: "#CCCCCC" }} />
          ) : (
            <KeyboardArrowUpIcon style={{ color: "#CCCCCC" }} />
          )}
          <p style={{ textTransform: "uppercase" }}>aditya's portfolio</p>
        </div>
        {!collapsed &&
          data.map((data) => (
            <div className="file-link-sidepanel" key={data.id}>
              <img className="img-sidepanel" src={data.imageURL} alt="react" />
              <p>{data.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sidepanel;
