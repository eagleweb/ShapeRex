import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import AddQuizInformation from './AddQuizInformation'
import AddQuizQuestion from './AddQuizQuestion'

const AddQuiz = () => (
            <Switch>
                <Route exact path="/quiz/add" component={AddQuizInformation} />
                <Route path={`/quiz/add/question/:page`} component={AddQuizQuestion} />
            </Switch>
);

export default withRouter(AddQuiz)