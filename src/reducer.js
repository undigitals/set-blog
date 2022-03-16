import { combineReducers } from "redux";
import auth from './reducers/auth'
import common from "./reducers/common";
import home from './reducers/home';
import articleList from "./reducers/articleList";
import article from "./reducers/article";
import profile from "./reducers/profile";

const combine = combineReducers({
    auth,
    common,
    home,
    articleList,
    article,
    profile
})

export default combine;