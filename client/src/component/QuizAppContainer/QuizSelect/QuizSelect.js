import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllQuizzes } from '../../../actions/quizActions'

class QuizSelect extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllQuizzes();
    }

    render(){
        const {quizzes} = this.props.quizzes;
        return (
            <div>
                <ul>
                    {quizzes.map((item) =>
                        <li key={item._id}><Link to={`quiz/${item._id}`}>{item.quiz_name}</Link></li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quizzes: state.quizzes
    }
};

export default connect(mapStateToProps, {getAllQuizzes})(QuizSelect)