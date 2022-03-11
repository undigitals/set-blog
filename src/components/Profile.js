import React from 'react'
import { Link } from 'react-router-dom';

const Profile = () => {

    return (

        <div className="profile-page">

            <div className="user-info">
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <img src="http://i.imgur.com/Qr71crq.jpg" className="user-img" />
                            <h4>Eric Simons</h4>
                            <p>
                                Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the
                                Hunger Games
                            </p>
                            <button className="btn btn-sm btn-outline-secondary action-btn">
                                <i className="ion-plus-round"></i>
                                &nbsp;
                                Follow Eric Simons
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <div className="articles-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <Link to="" className="nav-link active" >My Articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-link">Favorited Articles</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="article-preview">
                            <div className="article-meta">
                                <Link to=""><img src="http://i.imgur.com/Qr71crq.jpg" /></Link>
                                <div className="info">
                                    <Link to="" className="author">Eric Simons</Link>
                                    <span className="date">January 20th</span>
                                </div>
                                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                    <i className="ion-heart"></i> 29
                                </button>
                            </div>
                            <Link to="" className="preview-link">
                                <h1>How to build webapps that scale</h1>
                                <p>This is the description for the post.</p>
                                <span>Read more...</span>
                            </Link>
                        </div>

                        <div className="article-preview">
                            <div className="article-meta">
                                <Link to=""><img src="http://i.imgur.com/N4VcUeJ.jpg" /></Link>
                                <div className="info">
                                    <Link to="" className="author">Albert Pai</Link>
                                    <span className="date">January 20th</span>
                                </div>
                                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                    <i className="ion-heart"></i> 32
                                </button>
                            </div>
                            <Link to="" className="preview-link">
                                <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                                <p>This is the description for the post.</p>
                                <span>Read more...</span>
                                <ul className="tag-list">
                                    <li className="tag-default tag-pill tag-outline">Music</li>
                                    <li className="tag-default tag-pill tag-outline">Song</li>
                                </ul>
                            </Link>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Profile;