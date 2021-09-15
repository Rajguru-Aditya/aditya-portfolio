import React from "react";
import "./about.css";
import linkedIn from "../images/linkedin1.png";
import instagram from "../images/instagram1.png";
import twitter from "../images/twitter1.png";
import github from "../images/github-logo.png";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1 id="about-title">About Me</h1>
        <p id="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="social-icons">
          <a href="/">
            <img src={linkedIn} alt="linkedin" />
          </a>
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="/">
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
