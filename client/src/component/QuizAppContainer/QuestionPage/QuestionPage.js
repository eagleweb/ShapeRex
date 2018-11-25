import React, { Component } from 'react'
import quiz from '../../../mocks/quiz'

class QuestionPage extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <p>{quiz[0].quizname}</p>
        )
    }

}

export default QuestionPage