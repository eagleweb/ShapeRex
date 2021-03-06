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
            <div className={s.login}>
                <img src={user.avatar} alt={user.name} title={user.name} />
                <a href="#" onClick={this.onLogout}>Logout</a>
            </div>
        );
        const guestLinks = (
            <div className={s.login}>
                <ul>
                    <li>
                        <Link to="/register">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Sign In</Link>
                    </li>
                </ul>
            </div>
        );
        const mobileMenu = (
          <nav className={s.mobile_menu}>
              <input type="checkbox" id="menu" className={s.hidden_menu_ticker} />
                  <label className={s.btn_menu} htmlFor="menu">
                      <span className={s.first_span}></span>
                      <span className={s.second_span}></span>
                      <span className={s.third_span}></span>
                  </label>
                  <ul className={s.header_menu}>
                      <li><NavLink to="/quiz">Quiz</NavLink></li>
                      <li><NavLink to="/quiz/account">Account</NavLink></li>
                      <li><NavLink to="/quiz/statistic">Statistic</NavLink></li>
                      <li><NavLink to="/quiz/add">Add quiz</NavLink></li>
                      <li><NavLink to="/quiz/help">Help</NavLink></li>
                      {isAuthenticated ?
                          <li><a href="#" onClick={this.onLogout}>Logout</a></li> :
                          <li><NavLink to="/login">Sign In</NavLink></li>}
                  </ul>
          </nav>
        );

        return (
        <header className={s.header_container}>
            <div className={s.header}>
                <div className={s.logo}>
                    <Link to="/">
                        <img src={logo} alt="ShapeRex"/>
                    </Link>
                </div>
                <nav>
                    <ul className={s.menu_main}>
                        <li><NavLink exact activeClassName={s.current} to="/">Home</NavLink></li>
                        <li className={s.drop_down}><NavLink activeClassName={s.current} to="/quiz">Quiz</NavLink>
                            <ul className={s.sub_menu}>
                                <li><NavLink to="/quiz">Quiz</NavLink></li>
                                <li><NavLink to="/quiz/account">Account</NavLink></li>
                                <li><NavLink to="/quiz/statistic">Statistic</NavLink></li>
                                <li><NavLink to="/quiz/add">Add quiz</NavLink></li>
                                <li><NavLink to="/quiz/help">Help</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink activeClassName={s.current} to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
                <nav>
                    {isAuthenticated ? authLinks : guestLinks}
                </nav>
                {mobileMenu}
            </div>
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