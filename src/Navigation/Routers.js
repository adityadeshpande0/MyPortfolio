import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "..//Navigation/routersStyles.css";
import Home from "../Components/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Appbar from "../Components/Appbar/Appbar";
import Footer from "../Components/Footer/Footer";
import Github from "../Components/GithubProfile/Github";
import Projects from "../Components/Projects/Projects";
import Blogs from "..//Components/MyBlogs/Blogs";
import Contact from "../Components/ContactInfo/Contact";
import Profile from "../Components/MyProfile/Profile";
import Sidepanel from "../Components/Sidepanel/Sidepanel";
function Routers() {
  return (
    <Router>
      <div className="main-block-router">
        <Navbar />
        <div className="content-block-router">
          <Appbar />
          <Sidepanel/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/github" element={<Github />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default Routers;
