import React from "react";
// import AlertDialogBox from '../Popups/AlertDialogBox'
import "../Home/homeStyles.css";
import AlertDialogBox from "../Popups/AlertDialogBox";
function Home() {
  return (
    <div className="home-main-container">
      <p className="home-name-text">Aditya Deshpande</p>
      <div className="home-container">
        <p className="type-anim-text">Front End Developer</p>
        <div className="home-btn-container">
        <button className="home-button">My Projects</button>
        <button className="home-button cntm-button">Contact me</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
