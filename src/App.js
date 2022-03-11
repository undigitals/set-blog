import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Editor from './components/Editor';
import Article from './components/Article';
import Settings from './components/Settings';
import Profile from './components/Profile';
// import Profile from './components/Profile';


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/settings" element={<Settings />} />
        {/* <Route path="/@:username/favorites" element={<ProfileFavorites/>}/> */}
        <Route path="/@:username" element={<Profile />} />
      </Routes>
    </div>
  )

}

export default App;