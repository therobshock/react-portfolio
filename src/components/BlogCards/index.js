import React from 'react';
import './style.css';

export function FeatBlog({ avatar, headline, content }) {
    return (
        <div class="article-card">
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

export function BlogCard({ avatar, headline }) {
    return (
        <div class="article-card">
            <div class="avatar">
                <img src={avatar} alt="placeholder" />
            </div>
            <div class="content">
                <h2>{headline}</h2>
            </div>
        </div>
    )
}