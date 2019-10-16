import React from "react";
import "./style.css";

function Jumbotron({ children, addClass }) {
  return (
    <div
      className={`jumbotron ${addClass}`}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
