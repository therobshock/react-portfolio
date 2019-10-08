import React from "react";
import "./style.css";

export function MainLogo() {
    return (
        <a className="main-logo" href="/">
            <div className="stem"></div>
            <div className="triangle left-eye"></div>
            <div className="triangle right-eye"></div>
            <div className="triangle nose"></div>
            <div className="mouth"></div>
        </a>

    )
}

export function LargeLogo(props) {
    return (
            <a className="large-logo" href="/">
                <div className="stem"></div>
                <p style={props.style}>{props.text}</p>
            </a>
    )
}

export function SmallLogo(props) {
    return (
        <a className="small-logo" href="/">
            <div className="stem"></div>
            <p style={props.style}><i className={props.icon}></i></p>
        </a>
    )
}
