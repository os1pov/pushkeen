import React from 'react'
import { NavLink } from 'react-router-dom'
import Switcher from '../Switcher/Switcher'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <NavLink to="/users" className="header__logo" />
                <Switcher />
            </div>
        </header>
    )
}

export default Header