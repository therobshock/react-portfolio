import React from "react";
import "./style.css";

export function MainLogo() {
    return (
        <a className="main-logo" href="/">
        </a>

    )
}

export function LargeLogo({style, text, link}) {
    return (
            <a className="large-logo" href={link}>
                <p style={style}>{text}</p>
            </a>
    )
}

export function SmallLogo({style, icon, link}) {
    return (
        <a className="small-logo" href={link} target="_blank">
            <p style={style}><i className={icon}></i></p>
        </a>
    )
}
