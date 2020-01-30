import React from 'react';
import './style.css';

function PortfolioCard (props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.image} alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.about}</p>
                <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Try App</a>
            </div>
        </div>
    )
}

export default PortfolioCard;