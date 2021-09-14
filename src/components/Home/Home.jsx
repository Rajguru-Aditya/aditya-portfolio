import React from "react";
import "./home.css";
import aditya from "../images/aditya2.jpg";
import Button from "../ContactButton/Button";

function Home() {
  return (
    <div className="home">
      <div className="home-text-container">
        <div className="intro-container">
          <p id="hello">Hello,</p>
          <br />
          <p id="name-text">
            I'm <span id="name">Aditya Rajguru</span>
          </p>
          <br />
          <p id="role">Web Developer and designer from Mumbai, India</p>
          <Button text="Get In Touch" />
        </div>
      </div>
      <div className="img-container">
        <img id="aditya-img" src={aditya} alt="" />
      </div>
    </div>
  );
}

export default Home;
