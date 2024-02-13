import React from "react";
import './Home.css';
import {  Link } from "react-router-dom";
import welcome from '../Images/welcome.jpg';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

function Home() {
  return (
    <div className="body">
      <div className="content">
        <div  className="content1">
        <h5>WELCOME TO MY PAGE!</h5>
        <h2>
          Hello 👋 I'm LOKAJANANI K C - <br></br>curious 
            front end devloper <br></br> using Reactjs.
        </h2>
        </div>
        <div  className="content2">
        <img  className="welcome" src={welcome} alt="nameof"  />
        </div>
        </div>
        <div className="link">
            <Link to="https://github.com/jan07nan"><IoLogoGithub /> </Link>
            <Link to="https://www.linkedin.com/in/lokajanani-k-c-491131215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></Link>
            <Link to="mailto:janani261201@gmail.com"><IoMailOpenOutline /></Link>

        </div>
    </div>
  );
}

export default Home;
