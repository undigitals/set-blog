import React from 'react';
import { Link } from 'react-router-dom';

const ArticleMeta = () => {

    return (
        <div className="article-meta">
            <Link to=""><img src="http://i.imgur.com/Qr71crq.jpg" /></Link>
            <div className="info">
                <Link to="" className="author">Eric Simons</Link>
                <span className="date">January 20th</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round"></i>
                &nbsp;
                Follow Eric Simons <span className="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart"></i>
                &nbsp;
                Favorite Post <span className="counter">(29)</span>
            </button>
        </div>
    )
}

export default ArticleMeta;