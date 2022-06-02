import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Header from '../components/Header/Header'
import Loader from '../components/Loader/Loader'
import UsersPage from '../pages/UsersPage/UsersPage'
import './App.scss'

const App = () => {
    const { isLoading } = useTypedSelector(state => state.settings)
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/users")
    },[])

    return (
        <div className="app">
            <Header />
            {isLoading ? <Loader /> :
                <Routes>
                    <Route path='/users' element={<UsersPage />} />
                </Routes>
            }
        </div>
    )
}

export default App