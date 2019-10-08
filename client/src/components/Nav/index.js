import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-around">
        <a className="small-logo" href="/">
          Home
        </a>
        <a className="large-logo" href="/">
          Home
        </a>
        <a className="small-logo" href="/">
          Home
        </a>
        <a className="main-logo" href="/">
          <div className="stem"></div>
          <div className="triangle left-eye"></div>
          <div className="triangle right-eye"></div>
          <div className="triangle nose"></div>
          <div className="mouth"></div>
          Home
        </a>
        <a className="small-logo" href="/">
          Home
        </a>
        <a className="large-logo" href="/">
          Home
        </a>
        <a className="small-logo" href="/">
          Home
        </a>
      </div>
    </nav>
  );
}

export default Nav;
