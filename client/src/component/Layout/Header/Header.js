import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './header.module.css'
import logo from '../../../assets/img/logo.png'

const Header = () => (
    <header>
        <div className={s.logo}>
            <img src={logo} alt="ShapeRex"/>
        </div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/quiz">Quiz</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </header>

);

export default Header