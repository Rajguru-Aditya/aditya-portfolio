import React from "react";
import ServiceList from "../ServicesList/ServiceList";
import "./services.css";

function Services() {
  return (
    <div className="services">
      <div className="service-title">
        <h1 id="service-title-text">Services Provided</h1>
      </div>
      <div className="service-container">
        <ServiceList
          services={[
            "Responsive",
            "Brand-accurate",
            "Conversion-focused",
            "HTML, CSS, JavaScript, ReactJS",
          ]}
          title="Frontend"
        />
        <ServiceList
          services={["Database", "APIs", "ReactJS, NodeJS, ExpressJS, MongoDB"]}
          title="Backend"
        />
      </div>
    </div>
  );
}

export default Services;
