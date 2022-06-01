import React from 'react'
import { Routes } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Header from '../components/Header/Header'
import Loader from '../components/Loader/Loader'
import './App.scss'

const App = () => {
    const { isLoading } = useTypedSelector(state => state.settings)

    return (
        <div className="app">
            <Header />
            {isLoading ? <Loader /> :
                <Routes>

                </Routes>
            }
        </div>
    )
}

export default App