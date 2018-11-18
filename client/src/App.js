import React, { Component} from 'react'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import s from './App.module.css'
import Header from './component/Header/Header'

const history = createBrowserHistory();

export default class App extends Component {
    render(){
        return(
            <div className={s.wrapper}>
                <Router history={history}>
                    <Route exact path="/" component={Header}/>
                </Router>
            </div>
        )
    }
}