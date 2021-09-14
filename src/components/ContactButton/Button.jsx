import React from "react";
import "./button.css";

function Button(props) {
  return (
    <div className="button">
      <p>{props.text}</p>
    </div>
  );
}

export default Button;
