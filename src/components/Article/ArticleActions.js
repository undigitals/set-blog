import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { useDispatch } from 'react-redux';
import { DELETE_ARTICLE } from '../../constants/actionTypes';

const ArticleActions = ({
    canModify,
    article
}) => {
    const dispatch = useDispatch();
    const del = () => {
        dispatch({ type: DELETE_ARTICLE, payload: agent.Articles.del(article?.slug) })
    }

    if (canModify) {
        return (
            <span>
                <Link
                    to={`/editor/${article?.slug}`}
                    className="btn btn-outline-secondary btn-sm"
                >
                    <i className="ion-edit"></i>Edit Article
                </Link>

                <button className="btn btn-outline-danger btn-sm" onClick={del}>
                    <i className="ion-trash-a"></i>Delete Article
                </button>

            </span>
        )
    }
    return (
        <span>
        </span>
    )
}

export default ArticleActions;