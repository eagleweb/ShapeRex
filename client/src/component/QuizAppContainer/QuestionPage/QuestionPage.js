import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuiz } from '../../../actions/quizActions'

class QuestionPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getQuiz(this.props.match.params.id);
    }

    render(){
        const quiz = this.props.quiz;

        return (
            <div>
            <h2>{quiz.quiz_name}</h2>
            {/*<p>{quiz.questions.question}</p>*/}
                <ul>
                    {quiz.questions.answer_variant.map((item) =>
                        <li key={item._id}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quiz: state.quizzes.quiz
    }
};

export default connect(mapStateToProps, {getQuiz})(QuestionPage)