import React from "react";
import './Home.css';
import {  Link } from "react-router-dom";

function Home() {
  return (
    <div className="body">
      <div className="content">
        <h5>WELCOME TO MY WORLD</h5>
        <h2>
          Hello 👋 I'm LOKAJANANI K C - <br></br>curious 
          designer and <br></br> front end devloper.
        </h2>
        <div className="link">
            <Link to="https://github.com/jan07nan">GitHub</Link>
            <Link to="https://www.linkedin.com/in/lokajanani-k-c-491131215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</Link>
            <Link to="mailto:janani261201@gmail.com">Email</Link>

        </div>
      </div>
    </div>
  );
}

export default Home;
