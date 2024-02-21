import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Appbar from "../Components/Appbar/Appbar";
import Footer from "../Components/Footer/Footer";

function Routers() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Navbar />
        <div style={{ display: "flex", flexGrow: 1 }}>
          <Appbar />

          {/* Content rendered here */}
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
