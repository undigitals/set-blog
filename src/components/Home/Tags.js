import React from 'react'
import { Link } from 'react-router-dom';
import agent from '../../agent';

const Tags = ({ tags, onClickTag }) => {
    if (tags) {
        return (
            <div className="tag-list">
                {tags?.map(tag => {
                    const handleClick = e => {
                        e.preventDefault();
                        onClickTag(tag, page => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
                    }

                    return (
                        <a
                            className="tag-default tag-pill"
                            href=""
                            key={tag}
                            onClick={handleClick}
                        >
                            {tag}
                        </a>
                    )

                })}
            </div>
        )
    } else {
        return (
            <div>Loading Tags...</div>
        )
    }

}

export default Tags;