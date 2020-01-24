import React from 'react';
import './style.css';

export function FeatBlog({ avatar, headline, content }) {
    return (
        <div class="article-card article">
            <div class="avatar">
                <img src={avatar} alt="placeholder" />
            </div>
            <div class="content">
                <h2>{headline}</h2>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}

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