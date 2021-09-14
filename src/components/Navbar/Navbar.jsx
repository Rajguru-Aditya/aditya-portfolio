import React from "react";
import "./navbar.css";
import NavBar from "../images/navbarPortfolio.png";
import NavCross from "../images/navbarcross.png";

function Navbar() {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("navbar").style.display = "none";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    setTimeout(() => {
      document.getElementById("navbar").style.display = "block";
    }, 400);
  }

  return (
    <>
      <div onClick={openNav} id="navbar" className="navbar">
        <img className="nav-img" src={NavBar} alt="Navbar" />
      </div>

      <div id="myNav" className="overlay">
        <img
          className="nav-img closebtn"
          src={NavCross}
          onClick={closeNav}
          alt="closeNav"
        />
        <div className="overlay-content">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
