import React from "react";
import { MainLogo, LargeLogo, SmallLogo } from "./logos";
import "./style.css";

function Nav() {
  return (
      <div className="nav-fix">
    <nav>
        <div className="nav-trim"></div>
        <div className="container">
      <div className="logo-field d-flex justify-content-around align-items-center">
        <SmallLogo
          icon="fab fa-facebook-f"
          link="https://www.facebook.com/boltonwebdev/"
        />
        <LargeLogo
          text='Portfolio'
          style={{transform: 'scaleY(2.5)', fontSize: '15px'}}
          link='/portfolio'
        />
        <SmallLogo
          icon="fab fa-linkedin-in"
          link="https://www.linkedin.com/in/robert-bolton-5b2777175/"
        />
        <MainLogo/>
        <SmallLogo
          icon="fab fa-github"
          link="https://github.com/therobshock"
        />
        <LargeLogo 
          text='Blog'
          style={{fontSize: '30px'}}
          link='/blogs'
        />
        <SmallLogo
          icon="fas fa-envelope"
          link="mailto:therobshock@gmail.com"
        />
      </div>
      </div>
    </nav>
    </div>
  );
}

export default Nav;
