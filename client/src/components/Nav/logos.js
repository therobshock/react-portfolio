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

export function LargeLogo({style, text}) {
    return (
            <a className="large-logo" href="/">
                <div className="stem"></div>
                <p style={style}>{text}</p>
            </a>
    )
}

export function SmallLogo({style, icon}) {
    return (
        <a className="small-logo" href="/">
            <div className="stem"></div>
            <p style={style}><i className={icon}></i></p>
        </a>
    )
}
