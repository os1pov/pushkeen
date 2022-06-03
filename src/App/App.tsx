import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import UsersPage from '../pages/UsersPage/UsersPage'
import UserPage from '../pages/UserPage/UserPage'
import PostsPage from '../pages/PostsPage/PostsPage'
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
            </Routes>
        </div>
    )
}

export default App