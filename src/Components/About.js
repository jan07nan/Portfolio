import React from 'react';
import './About.css';
import about from '../Images/About.jpg';

function About() {
  return (
    <div className='body1'>
      <div className='div1'>
         <p>About Me</p>
      </div>
      <div className='content'>
      <div className='div2'>
        <p>I'm LOKAJANANI K C -  Enthusiastic engineering graduate in computer science with a 88% score in academics and required knowledge in coding and design. Proficient in C, HTML 5, JavaScript, and Reactjs. Ability to learn new softwares and technologies quickly. Capability to work in teams by providing valuable support. </p>
      </div>
      <div className='div3'>
      <img  className="aboutimg" src={about} alt="nameof"  />
      </div>
      </div>
    </div>
  )
}

export default About;
