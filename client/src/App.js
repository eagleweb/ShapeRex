import React, { Component} from 'react'
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

const Home = () => (
    <div>
        <h2>Home sder</h2>
    </div>
);

export default class App extends Component {
    render(){
        return(
            <Router history={history}>
                <Route exact path="/" component={Home}/>
            </Router>
        )
    }
}