import React from 'react'
import { Switch, Route, NavLink, withRouter } from 'react-router-dom'
import QuizSelect from './QuizSelect/QuizSelect'
import QuestionPage from './QuestionPage/QuestionPage'
import Account from './Account/Account'
import Statistic from './Statistic/Statistic'
import AddQuiz from './AddQuiz/AddQuiz'
import Help from './Help/Help'
import s from './quizappcontainer.module.css'

const AppContainer = () => (
    <div className={s.app_container}>
        <nav className={s.menu}>
            <ul>
                <li><NavLink to="/quiz" className={`${s.quiz} ${s.menu_item}`}>Quiz</NavLink></li>
                <li><NavLink to="/quiz/account" className={`${s.account} ${s.menu_item}`}>My account</NavLink></li>
                <li><NavLink to="/quiz/statistic" className={`${s.statistic} ${s.menu_item}`}>My statistics</NavLink></li>
                <li><NavLink to="/quiz/add" className={`${s.add_quiz} ${s.menu_item}`}>Add quiz</NavLink></li>
                <li><NavLink to="/quiz/help" className={`${s.help} ${s.menu_item}`}>Help</NavLink></li>
            </ul>
        </nav>
        <div className={s.app_content}>
            <Switch>
                <Route exact path="/quiz" component={QuizSelect}/>
                <Route path="/quiz/account" component={Account} />
                <Route path="/quiz/statistic" component={Statistic} />
                <Route path="/quiz/add" component={AddQuiz} />
                <Route path="/quiz/help" component={Help} />
                <Route path={`/quiz/:id`} component={QuestionPage} />
            </Switch>
        </div>
    </div>
);

export default withRouter(AppContainer)