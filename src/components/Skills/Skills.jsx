import React from "react";
import "./skills.css";
import TopLoader from "react-top-loader";
import Button from "../ContactButton/Button";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-container">
        <header id="skills-title">My Skills</header>

        <div className="skills-content">
          <div id="skills-display">
            <div className="skill-set">
              <p className="skill-title-text">Web design</p>
              <TopLoader
                style={{ borderRadius: "50px" }}
                show
                progress={0.7}
                fixed={false}
                backgroundColor="#fff"
                color="#FA5151"
                thickness={10}
              />
            </div>
            <div className="skill-set">
              <p className="skill-title-text">JavaScript</p>
              <TopLoader
                style={{ borderRadius: "50px" }}
                show
                progress={0.6}
                fixed={false}
                backgroundColor="#fff"
                color="#FFD600"
                thickness={10}
              />
            </div>
            <div className="skill-set">
              <p className="skill-title-text">React JS</p>
              <TopLoader
                style={{ borderRadius: "50px" }}
                show
                progress={0.55}
                fixed={false}
                backgroundColor="#fff"
                color="#74FFE7"
                thickness={10}
              />
            </div>
            <div className="skill-set">
              <p className="skill-title-text">Backend</p>
              <TopLoader
                style={{ borderRadius: "50px" }}
                show
                progress={0.5}
                fixed={false}
                backgroundColor="#fff"
                color="#66ff43"
                thickness={10}
              />
            </div>
          </div>
          <div id="skills-text">
            Designing and developing{" "}
            <span style={{ fontWeight: "700" }}>beautiful</span>,{" "}
            <span style={{ fontWeight: "700" }}>brand-accurate</span> and{" "}
            <span style={{ fontWeight: "700" }}>conversion-focused</span>{" "}
            websites is my forte.
          </div>
        </div>
        <div className="skills-button-container">
          <Button text="See My Work" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
