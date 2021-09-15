import React from "react";
import "./home.css";
import aditya from "../images/aditya2.jpg";
import Button from "../ContactButton/Button";
import Tilt from "react-tilt";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="home">
      <div className="home-text-container">
        <div className="intro-container">
          {/* <p id="hello">Hello,</p> */}
          <div id="hello">
            <Typewriter
              options={{
                strings: ["Hello,", "Namaste,", "Nei Hou,"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <br />
          <p id="name-text">
            I'm <span id="name">Aditya Rajguru</span>
          </p>
          <br />
          <p id="role">Web Developer and designer from Mumbai, India</p>
          <Button text="Get In Touch" />
        </div>
      </div>
      {/* <div className="img-container"> */}
      <Tilt className="Tilt img-container" options={{ max: 25 }}>
        <img id="aditya-img" src={aditya} alt="" />
      </Tilt>
      {/* </div> */}
    </div>
  );
}

export default Home;
