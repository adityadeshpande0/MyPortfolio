import React from "react";
// import AlertDialogBox from '../Popups/AlertDialogBox'
import "../Home/homeStyles.css";
import { Link } from "react-router-dom";
function Home() {
  const techTags = [
    "React Js",
    "React Native",
    "Electron JS",
    "Redux",
    "Javascript",
    "HTML",
    "CSS",
    "Figma",
    "Material UI",
    "Bootstrap",
    "Git",
    "Jira",
  ];

  return (
    <div className="home-main-container">
      <p className="home-name-text">Aditya Deshpande</p>
      <div className="home-container">
        <p className="type-anim-text">Front End Developer</p>

        <div className="skilltag-container">
          {techTags.map((data, index) => (
            <span className="home-skilltags" key={index}>
              {data}
            </span>
          ))}
        </div>

        <div className="home-btn-container">
          <Link className="home-button" to="/projects">
            My Projects
          </Link>
          <Link className="home-button cntm-button" to="/contact">
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
