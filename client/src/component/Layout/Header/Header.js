import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './header.module.css'
import logo from '../../../assets/img/logo.png'

const Header = () => (
    <header className={s.header}>
        <div className={s.logo}>
            <img src={logo} alt="ShapeRex"/>
        </div>
        <nav>
            <ul className={s.menu}>
                <li><NavLink exact activeClassName={s.item_active} to="/">Home</NavLink></li>
                <li><NavLink activeClassName={s.item_active} to="/quiz">Quiz</NavLink></li>
                <li><NavLink activeClassName={s.item_active} to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
        <div className={s.login}>
            <span>Log in</span>
        </div>
    </header>

);

export default Header