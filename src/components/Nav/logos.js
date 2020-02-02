import React from "react";
import "./style.css";

export function MainLogo() {
    return (
        <a className="main-logo logo" href="/">
            <div className="inside"></div>
            <div className="symbol"></div>
        </a>

    )
}

export function LargeLogo({style, text, link}) {
    return (
            <a className="large-logo logo" href={link}>
                <div className="inside"></div>
                <div className="icon">
                    <div style={style}>{text}</div>
                </div>
            </a>
    )
}

export function SmallLogo({style, icon, link}) {
    return (
        <a className="small-logo logo" href={link} target="_blank">
            <div className="inside"></div>
            <div className="icon">
                <div style={style}><i className={icon}></i></div>
            </div>
        </a>
    )
}
