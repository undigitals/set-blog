import React from 'react'
import { Link } from 'react-router-dom'
import ArticleList from "../ArticleList"
const MainView = () => {

    return (
        <>
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                    <li className="nav-item">
                        <Link to="" className="nav-link disabled">Your Feed</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link active">Global Feed</Link>
                    </li>
                </ul>
            </div>

            <ArticleList />
        </>
    )
}

export default MainView;