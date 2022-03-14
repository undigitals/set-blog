import React from 'react'
import { Link } from 'react-router-dom'
import ArticleList from "../ArticleList"
import agent from '../../agent'
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';


const YourFeedTab = ({ token, onTabClicked, tab }) => {
    if (token) {
        const clickHandler = e => {
            e.preventDefault();
            onTabClicked('feed', agent.Articles.feed, agent.Articles.feed());
        }

        return (
            <li className="nav-item">
                <a
                    href=""
                    className={tab === 'feed' ? 'nav-link active' : 'nav-link'}
                    onClick={clickHandler}
                >
                    Your Feed
                </a>
            </li>
        )
    }
}


const GlobalFeedTab = ({ onTabClicked, tab }) => {
    const clickHandler = e => {
        e.preventDefault();
        onTabClicked('all', agent.Articles.all, agent.Articles.all());
    }

    return (
        <li className="nav-item">
            <a
                href=""
                className={tab === 'all' ? 'nav-link active' : 'nav-link'}
                onClick={clickHandler}
            >
                Global Feed
            </a>
        </li>
    )

}





const MainView = () => {

    const dispatch = useDispatch();
    const { home, common, articleList } = useSelector(state => state);

    const onTabClicked = (tab, pager, payload) => {
        dispatch({ type: CHANGE_TAB, tab, pager, payload })
    }

    return (
        <>
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">

                    <YourFeedTab
                        token={common?.token}
                        tab={articleList?.tab}
                        onTabClicked={onTabClicked}
                    />

                    <GlobalFeedTab
                        tab={articleList?.tab}
                        onTabClicked={onTabClicked}
                    />


                </ul>
            </div>

            <ArticleList />
        </>
    )
}

export default MainView;