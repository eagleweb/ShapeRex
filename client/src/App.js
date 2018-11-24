import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Layout from './component/Layout/Layout'
import Page404 from './component/404/Page404'
import Home from './component/Home/Home'
import Quiz from './component/Quiz/Quiz'
import Contact from './component/Contact/Contact'

const history = createBrowserHistory();

export default class App extends Component {
    render(){
        return(
            <Router history={history}>
                <Layout>
                        <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/quiz" component={Quiz} />
                        <Route path="/contact" component={Contact} />
                        <Route component={Page404} />
                        </Switch>
                </Layout>
            </Router>
        )
    }
}