import React from "react";
import "./serviceList.css";
import Checkmark from "../images/check-markPink.png";
import Tilt from "react-tilt";

function ServiceList(props) {
  const serviceCreator = (service) => {
    return (
      <div key={service} className="content-box">
        <img id="checkmark" src={Checkmark} alt="Checkmark" />
        <p>{service}</p>
      </div>
    );
  };

  return (
    <Tilt className="Tilt list-box" options={{ max: 25 }}>
      <div className="title-box">
        <header>{props.title}</header>
      </div>
      {props.services.map(serviceCreator)}
    </Tilt>
  );
}

export default ServiceList;
