import React from "react";
// import AlertDialogBox from '../Popups/AlertDialogBox'
import "../Home/homeStyles.css";
import { Link } from "react-router-dom";
function Home() {
  const techTags = [
    { skill: "React", color: "#E5FCC2" },
    { skill: "Redux Toolkit", color: "#72DDF7" },
    { skill: "RESTful Services", color: "#F68E5F" },
    { skill: "React Query", color: "#D0F4DE" },
    { skill: "Hooks", color: "#59C3C3" },
    { skill: "Next.js", color: "#FDC5F5" },
    { skill: "TypeScript", color: "#F1FFFA" },
    { skill: "Jest", color: "#FFE6FA" },
    { skill: "Testing", color: "#FFFFE8" },
    { skill: "JavaScript", color: "#F1FFFA" },
    { skill: "Bootstrap", color: "#FDC5F5" },
    { skill: "Tailwind CSS", color: "#72DDF7" },
    { skill: "Azure Cloud", color: "#F0F3BD" },
    { skill: "Azure DevOps", color: "#D0F4DE" },
    { skill: "HTML/HTML5", color: "#59C3C3" },
    { skill: "CSS/SASS/LESS", color: "#F68E5F" },
    { skill: "Git/Version Control", color: "#D0F4DE" },
    { skill: "Redux Thunk", color: "#F1FFFA" },
    { skill: "RTL", color: "#72DDF7" },
  ];

  return (
    <div className="home-main-container">
      <p className="home-name-text">Aditya Deshpande</p>
      <div className="home-container">
        <p className="type-anim-text">Front End Developer</p>
        <div className="skilltag-container">
          {techTags.map((data, index) => (
            <span
              style={{ color: data.color }}
              className="home-skilltags"
              key={index}
            >
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
