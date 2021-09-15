import React from "react";
import "./serviceList.css";
import Checkmark from "../images/check-mark.png";

function ServiceList(props) {
  const serviceCreator = (service) => {
    return (
      <div className="content-box">
        <img id="checkmark" src={Checkmark} alt="Checkmark" />
        <p>{service}</p>
      </div>
    );
  };

  return (
    <div className="list-box">
      <div className="title-box">
        <header>{props.title}</header>
      </div>
      {/* <div className="content-box">
        <img id="checkmark" src={Checkmark} alt="Checkmark" />
        <p>Service Name</p>
      </div> */}
      {props.services.map(serviceCreator)}
    </div>
  );
}

export default ServiceList;
