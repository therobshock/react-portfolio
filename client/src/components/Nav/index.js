import React from "react";
import { MainLogo, LargeLogo, SmallLogo } from "./logos";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-around">
        <SmallLogo
          icon="fab fa-facebook-f"
        />
        <LargeLogo
          text='Portfolio'
          style={{transform: 'scaleY(2.5)', fontSize: '15px'}}
        />
        <SmallLogo
          icon="fab fa-linkedin-in"
        />
        <MainLogo/>
        <SmallLogo
          icon="fab fa-github"
        />
        <LargeLogo 
          text='Blog'
          style={{fontSize: '30px'}}
        />
        <SmallLogo
          icon="fas fa-envelope"
        />
      </div>
    </nav>
  );
}

export default Nav;
