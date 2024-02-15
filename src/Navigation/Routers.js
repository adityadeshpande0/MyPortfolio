import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Appbar from "../Components/Appbar/Appbar";
import Footer from "../Components/Footer/Footer";

function Routers() {
  return (
    <Router>
      <div>
        <Navbar />
        <Appbar />
        <Routes>
          {/* <Route exact path="/" Component={Home} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default Routers;
