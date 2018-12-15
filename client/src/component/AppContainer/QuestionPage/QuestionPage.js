import React, { Component } from 'react'
import T from 'prop-types';
import { connect } from 'react-redux'
import Countdown from 'react-countdown-now'
import { getQuiz } from '../../../actions/quizActions'
import QuestionView from './QuestionView'
import { Button } from 'reactstrap';

class QuestionPage extends Component {

    constructor(props) {
        super(props);
        this.renderQuiz = this.renderQuiz.bind(this);
        this.state = {
            flag: true,
            time_end: false
        };
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
        if (this.state.flag) {
            return (
            <div>
                <h2>{quiz.quiz_name}</h2>
                <p>Your will have 30 minutes to answer 25 questions.</p>
                <p>Are your ready?</p>
                <Button color="success" onClick={() => this.setState({flag: false})}>Yes</Button>
                <Button color="warning" onClick={() => this.props.history.push('/quiz')} >No, go back!</Button>
            </div>
            )
        }
        return (
            <div>
                <h2>{quiz.quiz_name}</h2>
                Time: <Countdown onComplete={() => this.setState({time_end: true})} renderer={({minutes, seconds}) => <span>{minutes}:{seconds}</span>} date={Date.now() + 10000} />
                {quiz.questions ? <QuestionView time_end={this.state.time_end} questions={quiz.questions} quiz_answer={quiz.quiz_answer} /> : null}
            </div>
        )
    }

    render(){
        return (
            <React.Fragment>
            {this.renderQuiz()}
            </React.Fragment>
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