import React from 'react'
import { Link } from 'react-router-dom'
import agent from '../agent'
import { useDispatch } from 'react-redux'
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes'

const FAVORITED_CLASS = "btn btn-sm btn-primary";
const NOT_FAVORITED_CLASS = "btn btn-sm btn-outline-primary";


const ArticlePreview = ({ article }) => {

    const dispatch = useDispatch();
    const favoritedButtonClass = article?.favorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS


    const handleClick = (e) => {
        e.preventDefault();
        if (article?.favorited) {
            dispatch({ type: ARTICLE_FAVORITED, payload: agent.Articles.favorite(article.slug) })
        } else {
            dispatch({ type: ARTICLE_UNFAVORITED, payload: agent.Articles.unfavorite(article.slug) })
        }
    }

    return (
        <div className="article-preview">
            <div className="article-meta">
                <Link to={`/@${article?.author?.username}`}><img src={article?.author?.image} /></Link>
                <div className="info">
                    <Link to={`/@${article?.author?.username}`} className="author">{article?.author?.username}</Link>
                    <span className="date">
                        {new Date(article?.createdAt).toDateString()}
                    </span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {article?.favoritesCount}
                </button>
            </div>
            <Link to={`/article/${article?.slug}`} className="preview-link">
                <h1>{article?.title}</h1>
                <p>{article?.description}</p>
                <span>Read more...</span>
                <ul className="tag-list">
                    {
                        article?.tagList?.map(tag => {
                            console.log("tag", tag)
                            return (
                                <li className="tag-default tag-pill tag-outline" key={tag}>{tag}</li>
                            )
                        })
                    }
                </ul>
            </Link>
        </div>
    )
}

export default ArticlePreview;