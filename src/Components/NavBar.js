import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./NavBar.css";
import name from "../Images/Capture.JPG";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";

function NavBar() {
  return (
    <div className="header">
      <div className="container1">
        <div className="name">
          <img src={name} alt="nameof" height={40} />
        </div>
        <div className="nav">
        <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/Resume">Resume</Link>
          <Link to="mailto:janani261201@gmail.com">Contact</Link>
        </div>
      </div>

      <div className="App-intro">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default NavBar;
