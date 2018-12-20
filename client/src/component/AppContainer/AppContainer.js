import React from 'react'
import { Switch, Route, NavLink, withRouter } from 'react-router-dom'
import QuizSelect from './QuizSelect/QuizSelect'
import QuestionPage from './QuestionPage/QuestionPage'
import Account from './Account/Account'
import Statistic from './Statistic/Statistic'
import AddQuiz from './AddQuiz/AddQuiz'
import AddQuizQuestion from './AddQuiz/AddQuizQuestion'
import Help from './Help/Help'
import s from './quizappcontainer.module.css'

const AppContainer = () => (
    <div className={s.app_container}>
        <nav className={s.menu}>
            <ul>
                <li><NavLink to="/quiz" activeClassName={s.item_active}>Quiz</NavLink></li>
                <li><NavLink to="/quiz/account" activeClassName={s.item_active}>My account</NavLink></li>
                <li><NavLink to="/quiz/statistic" activeClassName={s.item_active}>My statistics</NavLink></li>
                <li><NavLink to="/quiz/add" activeClassName={s.item_active}>Add quiz</NavLink></li>
                <li><NavLink to="/quiz/help" activeClassName={s.item_active}>Help</NavLink></li>
            </ul>
        </nav>
        <div className={s.app_content}>
            <Switch>
                <Route exact path="/quiz" component={QuizSelect}/>
                <Route path="/quiz/account" component={Account} />
                <Route path="/quiz/statistic" component={Statistic} />
                <Route exact path="/quiz/add" component={AddQuiz} />
                <Route path="/quiz/add/question" component={AddQuizQuestion} />
                <Route path="/quiz/help" component={Help} />
                <Route path={`/quiz/:id`} component={QuestionPage} />
            </Switch>
        </div>
    </div>
);

export default withRouter(AppContainer)