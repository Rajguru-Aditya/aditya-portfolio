import React from "react";
import "./projects.css";
import projectImg from "../images/bakugo.jpg";

function Projects(props) {
  //   const projectCreator = (project) => {
  //     return (
  //       <div className="project-box">
  //         <img src={projectImg} alt={project} />
  //       </div>
  //     );
  //   };

  return (
    <div className="projects">
      <div className="project-container">
        <div className="projects-title">
          <header>My Projects</header>
        </div>
        <div className="project-box-holder">
          {/* <div className="project-box">
            <img className="project-img" src={projectImg} alt="projectImg" />
          </div>
          <div className="project-box">
            <img className="project-img" src={projectImg} alt="projectImg" />
          </div>
          <div className="project-box">
            <img className="project-img" src={projectImg} alt="projectImg" />
          </div>

          <div className="project-box">
            <img className="project-img" src={projectImg} alt="projectImg" />
          </div>
          <div className="project-box">
            <img className="project-img" src={projectImg} alt="projectImg" />
          </div>
          <div className="project-box">
            <img className="project-img" src={projectImg} alt="projectImg" />
          </div>

          <div className="project-box">
            <img className="project-img" src={projectImg} alt="projectImg" />
          </div>
          <div className="project-box">
            <img className="project-img" src={projectImg} alt="projectImg" />
          </div>
          <div className="project-box">
            <img className="project-img" src={projectImg} alt="projectImg" />
          </div> */}

          {/* {props.projects.map(projectCreator)} */}
          {/* PROJECT 1 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={projectImg}
                  alt="Avatar"
                  className="project-img"
                  //   style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="project-name">Project 1</h1>
                <p className="project-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
                <button className="project-btn btn-left">Project</button>
                <button className="project-btn btn-right">Code</button>
              </div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={projectImg}
                  alt="Avatar"
                  className="project-img"
                  //   style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="project-name">Project 1</h1>
                <p className="project-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
                <button className="project-btn btn-left">Project</button>
                <button className="project-btn btn-right">Code</button>
              </div>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={projectImg}
                  alt="Avatar"
                  className="project-img"
                  //   style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="project-name">Project 1</h1>
                <p className="project-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
                <button className="project-btn btn-left">Project</button>
                <button className="project-btn btn-right">Code</button>
              </div>
            </div>
          </div>

          {/* PROJECT 4 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={projectImg}
                  alt="Avatar"
                  className="project-img"
                  //   style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="project-name">Project 1</h1>
                <p className="project-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
                <button className="project-btn btn-left">Project</button>
                <button className="project-btn btn-right">Code</button>
              </div>
            </div>
          </div>

          {/* PROJECT 5 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={projectImg}
                  alt="Avatar"
                  className="project-img"
                  //   style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="project-name">Project 1</h1>
                <p className="project-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
                <button className="project-btn btn-left">Project</button>
                <button className="project-btn btn-right">Code</button>
              </div>
            </div>
          </div>

          {/* PROJECT 6 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={projectImg}
                  alt="Avatar"
                  className="project-img"
                  //   style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="project-name">Project 1</h1>
                <p className="project-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
                <button className="project-btn btn-left">Project</button>
                <button className="project-btn btn-right">Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
