import React, { Component } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
import s from './header.module.css'
import logo from '../../../assets/img/logo.png'

class Header extends Component {

    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <ul className={s.login}>
                <a href="#" onClick={this.onLogout}>
                    <img src={user.avatar} alt={user.name} title={user.name} className={s.avatar}/>
                    <span>Logout</span>
                </a>
            </ul>
        );
        const guestLinks = (
            <ul className={s.login}>
                <li>
                    <Link to="/register">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Sign In</Link>
                </li>
            </ul>
        );

        return (
        <header className={s.header}>
            <div className={s.logo}>
                <Link to="/">
                    <img src={logo} alt="ShapeRex"/>
                </Link>
            </div>
            <nav>
                <ul className={s.menu}>
                    <li><NavLink exact activeClassName={s.item_active} to="/">Home</NavLink></li>
                    <li><NavLink activeClassName={s.item_active} to="/quiz">Quiz</NavLink></li>
                    <li><NavLink activeClassName={s.item_active} to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <nav>
                <div className={s.login}>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        </header>
        )
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default withRouter(connect(mapStateToProps, { logoutUser })(Header))