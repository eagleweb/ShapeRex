import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Layout from './component/Layout/Layout'
import Page404 from './component/404/Page404'
import Home from './component/Home/Home'
import QuizAppContainer from './component/QuizAppContainer/QuizAppContainer'
import Contact from './component/Contact/Contact'
import Register from './component/Authorization/Register'
import Login from './component/Authorization/Login'

const history = createBrowserHistory();

export default class App extends Component {
    render(){
        return(
            <Router history={history}>
                <Layout>
                        <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/quiz" component={QuizAppContainer} />
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