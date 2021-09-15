import React from "react";
import "./contact.css";
import helloImg from "../images/helloImg.svg";
import linkedIn from "../images/linkedin1.png";
import instagram from "../images/instagram1.png";
import twitter from "../images/twitter1.png";
import github from "../images/github-logo.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <header>Let's Work Together</header>
      </div>
      <div className="contact-content">
        <div className="contact-img-container">
          <img id="contact-img" src={helloImg} alt="" />
        </div>
        <div className="contact-text">
          <p>Let’s work Together!</p>
          <p>
            Ping me an{" "}
            <a href="/" id="email">
              email
            </a>{" "}
            or DM me on social media. Always up for a chat.
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
    </div>
  );
}

export default Contact;
