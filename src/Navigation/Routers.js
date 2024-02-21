import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '..//Navigation/routersStyles.css'
import Home from "../Components/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Appbar from "../Components/Appbar/Appbar";
import Footer from "../Components/Footer/Footer";

function Routers() {
  return (
    <Router>
      <div className="main-block-router">
        <Navbar />
        <div className="content-block-router">
          <Appbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default Routers;
