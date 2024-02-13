import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./Skills.css";

function Skills() {
  return (
    <div>
      <div className="title1">
        <p>Skills</p>
      </div>
      <div className="bodyy1">
        <div className="body2">
          <p className="bar1">HTML 5 </p>
          <ProgressBar completed={100} bgColor="grey" animateOnRender={true} />
          <p className="bar1">CSS </p>
          <ProgressBar completed={65} bgColor="rgb(249,163,28)" animateOnRender={true}  />
          <p className="bar1">JavaScript </p>
          <ProgressBar completed={20} bgColor="grey" animateOnRender={true} />
          <p className="bar1">C </p>
          <ProgressBar completed={50} bgColor="rgb(249,163,28)" animateOnRender={true} />
        </div>
        <div className="body3">
          <p className="bar1">Reactjs </p>
          <ProgressBar completed={60} bgColor="rgb(249,163,28)" animateOnRender={true} />
          <p className="bar1">UI/UX </p>
          <ProgressBar completed={50} bgColor="grey" animateOnRender={true} />
          <p className="bar1">Photoshop </p>
          <ProgressBar completed={40} bgColor="rgb(249,163,28)" animateOnRender={true} />
          <p className="bar1">Java </p>
          <ProgressBar completed={40} bgColor="grey" animateOnRender={true} />
        </div>
      </div>
      <div className="cont1">
        <div>
          <p className="hardskills">Hardskills</p>
          <ul>
            <li>Programming Languages (e.g. C,Java)</li>
            <li>Object-Oriented Programming (OOPS)</li>
            <li>Web Development (e.g. HTML, CSS, JavaScript)</li>
            <li>Database Management (e.g. SQL, MySQL, Oracle)</li>
            <li>Version Control (e.g. Git)</li>
            <li>Operating Systems (e.g. Windows, Linux, macOS)</li>
          </ul>
        </div>
        <div>
          {" "}
          <p className="softskills">Softskills</p>
          <ul>
            <li>Attention to Detail and Accuracy</li>
            <li>Time Management and Prioritization</li>
            <li>Adaptability and Flexibility</li>
            <li>Teamwork and Interpersonal Skills</li>
            <li>Communication and Collaboration</li>
            <li>Patience and Perseverance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
