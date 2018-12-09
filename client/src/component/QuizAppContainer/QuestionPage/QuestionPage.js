import React, { Component } from 'react'
import T from 'prop-types';
import { connect } from 'react-redux'
import { getQuiz } from '../../../actions/quizActions'
import Question from './QuestionView'

class QuestionPage extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getQuiz(this.props.match.params.id)
    }

    renderQuiz () {
        const quiz = this.props.quiz;
        if (this.props.isLoading) {
           return <div>Loading...</div>
        }
        if (!quiz) {
            return <div>No any questions!</div>
        }
        return (
            <div>
                <h2>{quiz.quiz_name}</h2>
                {quiz.questions ? <Question questions={quiz.questions} /> : null}
            </div>
        )
    }

    render(){
        return (
            <div>{this.renderQuiz()}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quiz: state.quizzes.quiz,
        isLoading: state.quizzes.isLoading
    }
};

QuestionPage.propTypes = {
    quiz: T.object,
    isLoading: T.bool
};

export default connect(mapStateToProps, {getQuiz})(QuestionPage)