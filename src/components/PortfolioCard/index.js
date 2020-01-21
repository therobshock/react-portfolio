import React from 'react';
import './style.css';

function PortfolioCard ({ image, title, content, alt, link }) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt={alt} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href={link} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default PortfolioCard;