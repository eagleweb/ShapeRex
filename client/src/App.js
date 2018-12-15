import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import Layout from './component/Layout/Layout'
import Page404 from './component/404/Page404'
import Home from './component/Home/Home'
import AppContainer from './component/AppContainer/AppContainer'
import Contact from './component/Contact/Contact'
import Register from './component/Authorization/Register'
import Login from './component/Authorization/Login'

const history = createBrowserHistory();

const PrivateRoute = ({ component: Component, auth}) => {
    return (
        <Route
            render={() => auth.isAuthenticated ? (<Component />) : (<Redirect to={{pathname: "/login"}}/>)}
        />
    )
};

class App extends Component {
    render(){
        return(
            <Router history={history}>
                <Layout>
                        <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute path="/quiz" component={AppContainer} auth={this.props.auth} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route component={Page404} />
                        </Switch>
                </Layout>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(App)