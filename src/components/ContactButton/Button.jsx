import React from "react";
import "./button.css";

function Button(props) {
  return (
    <a href="/">
      <div className="button">
        <p>{props.text}</p>
      </div>
    </a>
  );
}

export default Button;
