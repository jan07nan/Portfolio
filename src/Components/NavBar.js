import React from 'react'
import {  Link } from "react-router-dom";
import './NavBar.css';
import name from "../Images/Capture.JPG";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Resume from "./Resume";

function NavBar() {
  return (
    <div className='header'>
        <div className='name'>
        <img src={name} alt='nameof'  height={40}/>
        </div>
        <div className='nav'>
      <Link to='/About'>About</Link>
      <Link to={Education}>Education</Link>
      <Link to={Skills}>Skills</Link>
      <Link to={Resume}>Resume</Link>
      <Link to='#'>Contact</Link>
    </div>
    </div>
  )
}

export default NavBar;
