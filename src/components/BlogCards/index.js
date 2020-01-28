import React from 'react';
import './style.css';

export function FeatBlog(props) {
    return (
        <div class="article-card article">
            <div class="avatar">
                <img src={props.image} alt="placeholder" />
            </div>
            <div class="content">
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
        <div class="article-card preview">
            <div class="avatar">
                <img src={props.image} alt={props.alt} />
            </div>
            <div class="content">
                <h2>{props.headline}</h2>
            </div>
        </div>
    )
}