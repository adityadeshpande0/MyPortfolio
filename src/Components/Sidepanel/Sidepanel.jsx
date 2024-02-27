import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "..//Sidepanel/sidepanelStyles.css";
import reactIcon from "..//..//Assets/Images/icon_react_sidepanel.svg";

function Sidepanel() {
  const [collapsed, setCollapsed] = useState(false); // State to manage collapse/expand

  const data = [
    { id: 1, title: "home.jsx", imageURL: reactIcon },
    { id: 2, title: "about.html", imageURL: reactIcon },
    { id: 3, title: "projects.js", imageURL: reactIcon },
    { id: 4, title: "contact.css", imageURL: reactIcon },
    { id: 5, title: "blogs.json", imageURL: reactIcon },
    { id: 6, title: "github.md", imageURL: reactIcon },
  ];

  const toggleCollapse = () => {
    setCollapsed(!collapsed); // Toggles collapse state
  };

  return (
    <div className="main-block-sidepanel">
      <div className="explore-sidepanel">
        <p className="text-explore-sidepanel">explorer</p>
        <MoreHorizIcon className="three-dots-sidepanel" style={{ color: "#CCCCCC", cursor:"pointer" }} />
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
