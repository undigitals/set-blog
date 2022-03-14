import React from 'react'
import { Link } from 'react-router-dom';

const LoggedInView = ({ currentUser }) => {
    if (currentUser) {
        return (
            <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/editor">
                        <i className="ion-compose"></i>&nbsp;New Article
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/settings">
                        <i className="ion-gear-a"></i>&nbsp;Settings
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/@${currentUser.username}`}>
                        <img src={currentUser.image} className="user-pic" alt={currentUser.username} />
                        {currentUser.username}
                    </Link>
                </li>
            </ul>
        )
    } else {
        return null;
    }


}

const LoggedOutView = ({ currentUser }) => {
    if (!currentUser) {
        return (
            <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Sign in</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign up</Link>
                </li>
            </ul>
        )
    }

    return null;
}

const Header = ({ appName, currentUser }) => {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand" >{appName}</Link>

                <LoggedInView currentUser={currentUser} />
                <LoggedOutView currentUser={currentUser} />
            </div>
        </nav>

    )
}

export default Header;