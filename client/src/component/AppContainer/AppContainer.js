import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import QuizSelect from './QuizSelect/QuizSelect'
import QuestionPage from './QuestionPage/QuestionPage'
import Account from './Account/Account'
import Statistic from './Statistic/Statistic'
import Help from './Help/Help'
import s from './quizappcontainer.module.css'

const AppContainer = () => (
    <div className={s.container}>
        <nav>
            <ul className={s.menu}>
                <li><NavLink to="/quiz" activeClassName={s.item_active}>Quiz</NavLink></li>
                <li><NavLink to="/quiz/account" activeClassName={s.item_active}>My account</NavLink></li>
                <li><NavLink to="/quiz/statistic" activeClassName={s.item_active}>My statistics</NavLink></li>
                <li><NavLink to="/quiz/help" activeClassName={s.item_active}>Help</NavLink></li>
            </ul>
        </nav>

        <Switch>
        <Route exact path="/quiz" component={QuizSelect}/>
        <Route path="/quiz/account" component={Account} />
        <Route path="/quiz/statistic" component={Statistic} />
        <Route path="/quiz/help" component={Help} />
        <Route path={`/quiz/:id`} component={QuestionPage} />
        </Switch>
    </div>
);

export default AppContainer