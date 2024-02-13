import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import Navbar from "../Components/Navbar/Navbar";

function Routers() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/home" Component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;
