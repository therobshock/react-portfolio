import React from 'react';
import './style.css';

export function FeatBlog(props) {
    return (
        <div className="article-card article">
            <div className="avatar">
                <img src={props.image} alt="placeholder" />
            </div>
            <div className="content">
                <h2>{props.headline}</h2>
                <div>{props.children}</div>

            </div>
        </div>
    )
}

/* export function BlogParagraph({ content }) {
    return (
        <p>{content}</p>
    )
}
 */
export function BlogCard(props) {
    return (
        <div className="article-card preview">
            <div class="avatar">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="content">
                <h2>{props.headline}</h2>
            </div>
        </div>
    )
}