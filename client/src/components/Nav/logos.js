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

export function LargeLogo({style, text, link}) {
    return (
            <a className="large-logo" href={link}>
                <div className="stem"></div>
                <p style={style}>{text}</p>
            </a>
    )
}

export function SmallLogo({style, icon, link}) {
    return (
        <a className="small-logo" href={link} target="_blank">
            <div className="stem"></div>
            <p style={style}><i className={icon}></i></p>
        </a>
    )
}
