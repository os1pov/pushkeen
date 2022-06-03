import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import UsersPage from '../pages/UsersPage/UsersPage'
import UserPage from '../pages/UserPage/UserPage'
import PostsPage from '../pages/PostsPage/PostsPage'
import PostPage from '../pages/PostPage/PostPage'
import NotFound from '../components/NotFound/NotFound'
import './App.scss'

const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/users" />} />
                <Route path='/users' element={<UsersPage />} />
                <Route path='/user/:id' element={<UserPage />} />
                <Route path='/user/:id/posts' element={<PostsPage />} />
                <Route path='/post/:id' element={<PostPage />} />
                <Route path='*' element={<NotFound>Страница не найдена</NotFound>} />
            </Routes>
        </div>
    )
}

export default App