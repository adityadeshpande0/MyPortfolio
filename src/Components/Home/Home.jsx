import React from "react";
// import AlertDialogBox from '../Popups/AlertDialogBox'
import "../Home/homeStyles.css";
import AlertDialogBox from "../Popups/AlertDialogBox";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-main-container">
      <p className="home-name-text">Aditya Deshpande</p>
      <div className="home-container">
        <p className="type-anim-text">Front End Developer</p>
        <div className="home-btn-container">
       <Link className="home-button" to="/projects">My Projects</Link>
        <Link className="home-button cntm-button" to="/contact">Contact me</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
