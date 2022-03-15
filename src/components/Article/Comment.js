import React from 'react';
import { Link } from 'react-router-dom';
import common from '../../reducers/common';

const Comment = ({
    comment,
    currentUser,
    slug,
}) => {

    const show = currentUser?.username === comment?.author?.username

    return (
        <div className="card">
            <div className="card-block">
                <p className="card-text">{comment?.body}</p>
            </div>
            <div className="card-footer">
                <Link to={`/@${comment?.author?.username}`} className="comment-author">
                    <img src={comment?.author?.image} className="comment-author-img" alt={comment?.author?.username} />
                </Link>
                &nbsp;
                <Link to={`/@${comment?.author?.username}`} className="comment-author">{comment?.author?.username}</Link>
                <span className="date-posted">
                    {new Date(comment?.createdAt).toDateString()}
                </span>
            </div>
        </div>
    )
}

export default Comment;