import React from "react";
import "./projects.css";
// import projectImg from "../images/bakugo.jpg";

function Projects(props) {
  //   const projectCreator = (project) => {
  //     return (
  //       <div className="project-box">
  //         <img src={projectImg} alt={project} />
  //       </div>
  //     );
  //   };

  const placeholderTxt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut`;

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
                  src="https://user-images.githubusercontent.com/77228474/124073185-6ff4e200-da5f-11eb-841c-2d9e86f19417.png"
                  alt="Avatar"
                  className="project-img"
                  //   style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="project-name">Project 1</h1>
                <p className="project-desc">
                  {placeholderTxt.substring(0, 120) + "..."}
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
                  src="https://user-images.githubusercontent.com/77228474/123539556-f9eb3500-d757-11eb-9186-03ba81a35976.png"
                  alt="Avatar"
                  className="project-img"
                  //   style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="project-name">Project 1</h1>
                <p className="project-desc">
                  {placeholderTxt.substring(0, 120) + "..."}
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
                  src="https://user-images.githubusercontent.com/77228474/110441509-dd12ef00-80df-11eb-8cdd-a60a0cc65c87.png"
                  alt="Avatar"
                  className="project-img"
                  //   style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="project-name">Project 1</h1>
                <p className="project-desc">
                  {placeholderTxt.substring(0, 120) + "..."}
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
                  src="https://user-images.githubusercontent.com/77228474/123503021-e6fc3600-d66d-11eb-995a-74243a584a83.png"
                  alt="Avatar"
                  className="project-img"
                  //   style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="project-name">Project 1</h1>
                <p className="project-desc">
                  {placeholderTxt.substring(0, 120) + "..."}
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
                  src="https://user-images.githubusercontent.com/77228474/122921184-d30bb800-d37f-11eb-8d34-345dbda2e36f.png"
                  alt="Avatar"
                  className="project-img"
                  //   style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="project-name">Project 1</h1>
                <p className="project-desc">
                  {placeholderTxt.substring(0, 120) + "..."}
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
                  src="https://user-images.githubusercontent.com/77228474/122635397-58356980-d101-11eb-8961-2211e71c1596.png"
                  alt="Avatar"
                  className="project-img"
                  //   style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="project-name">Project 1</h1>
                <p className="project-desc">
                  {placeholderTxt.substring(0, 120) + "..."}
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
