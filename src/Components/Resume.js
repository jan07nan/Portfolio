import React from 'react'
import './Resume.css';
import { PiDownloadSimpleBold } from "react-icons/pi";
import resume from '../Images/Resume.JPG';

function Resume() {
  return (
    <div>
        <div className='conte1'>
      <p className='div1'>Resume</p> 
      <img  className="resume" src={resume} alt="nameof"  /> <br></br>
      <br></br>
      <button className="button1">
  <a
     className="buttonon"
     href="/Resume/Resume.pdf"
     download
     >
    Download CV <PiDownloadSimpleBold className='icon'/> 
  </a>
</button>
</div>
</div>
  )
}

export default Resume
