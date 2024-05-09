import React from "react";
// import AlertDialogBox from '../Popups/AlertDialogBox'
import "../Home/homeStyles.css";
import { Link } from "react-router-dom";
import AlertDialogBox from "../Popups/AlertDialogBox";
function Home() {
  const techTags = [
    { skill: "React Js", color: "#E5FCC2" },
    { skill: "React Native", color: "#FDC5F5" },
    { skill: "Electron Js", color: "#72DDF7" },
    { skill: "Javascript", color: "#D0F4DE" },
    { skill: "Typescript", color: "#59C3C3" },
    { skill: "Redux", color: "#F68E5F" },
    { skill: "HTML", color: "#F1FFFA" },
    { skill: "CSS", color: "#FFFFE8" },
    { skill: "Responsive Web Design", color: "#72DDF7" },
    { skill: "Material UI", color: "#FFE6FA" },
    { skill: "Bootstrap", color: "#F1FFFA" },
    { skill: "Git", color: "#59C3C3" },
    { skill: "Jira", color: "#FDC5F5" },
    { skill: "Figma", color: "#F0F3BD" },
  ];

  return (
    <div className="home-main-container">
      <p className="home-name-text">Aditya Deshpande</p>
      <div className="home-container">
        <p className="type-anim-text">Front End Developer</p>
        <div className="skilltag-container">
          {techTags.map((data, index) => (
            <span style={{color:data.color}} className="home-skilltags" key={index}>
              {data.skill}
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
