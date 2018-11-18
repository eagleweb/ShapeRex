import React from 'react'
import { Link } from 'react-router-dom'
import s from './header.module.css'
import logo from '../../assets/img/logo.png'

const Header = () => (
    <header>
        <div className={s.logo}>
            <img src={logo} alt="ShapeRex"/>
        </div>
        <ul>
            <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/app'>Statistics</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/contact'>Contact</Link></li>
        </ul>
    </header>

);

export default Header