import React from 'react'
import { Switch, Route } from 'react-router-dom'
import QuizSelect from './QuizSelect/QuizSelect'
import QuestionPage from './QuestionPage/QuestionPage'

const QuizAppContainer = ({match}) => (
    <div>
        <div>Menu</div>

        <Switch>
        <Route exact path={match.path} component={QuizSelect}/>
        <Route path={`${match.path}/:id`} component={QuestionPage} />
        </Switch>
    </div>
);

export default QuizAppContainer