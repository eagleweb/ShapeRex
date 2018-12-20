import React, { Component } from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { updateQuiz } from '../../../actions/quizActions'
import s from './addquiz.module.css'
import {Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label} from 'reactstrap';

const AnswerVariant = ({current_answer}) => {
    return (
        <InputGroup>
            <InputGroupAddon addonType="prepend">{'Answer #' + current_answer}</InputGroupAddon>
            <Input placeholder="Enter your answer variant" />
        </InputGroup>
    )
};

class AddQuizQuestion extends Component {

    constructor() {
        super();
        this.state = {
            current_question: 1,
            answer_count: 1,
            questions: [],
            quiz_answer: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChangeAnswer = this.handleInputChangeAnswer.bind(this);
        this.renderAnswerVariant = this.renderAnswerVariant.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChangeAnswer(e) {
        const initialArray = this.state.quiz_answer;

        this.setState({
            quiz_answer: update(initialArray, {})
        })
    }

    handleInputChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit() {
        const data = {

        };

        this.props.updateQuiz(this.state.question_id, data);
        this.setState({current_question: this.state.current_question + 1})
    }

    renderAnswerVariant () {
        let arr = [];
        for (let i = 0; i < this.state.answer_count; i++) {
            arr.push(<AnswerVariant key={i} current_answer={i+1} />);
        }
        return arr;
    }

    render() {
        const {current_question} = this.state;
        return(
            <div className={s.add_quiz_form}>
                <h2>Add question</h2>
                <Form>
                    <Label>Question #{current_question}</Label>
                    <InputGroup className={s.question_input}>
                        <InputGroupAddon addonType="prepend">Question</InputGroupAddon>
                        <Input
                            type="text"
                            name="question"
                            placeholder="Enter your question here"
                            onChange={ this.handleInputChange }
                        />
                    </InputGroup>
                    { this.renderAnswerVariant()}
                    <Button
                        className={s.question_button}
                        outline
                        color="success"
                        onClick = {() => this.setState({answer_count: this.state.answer_count + 1})}
                    >Add answer</Button>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Right answer</InputGroupAddon>
                        <Input
                            type="text"
                            name="question"
                            onChange={ this.handleInputChangeAnswer }
                            placeholder="Enter number of right answer"
                        />
                    </InputGroup>
                    <FormGroup>
                        <Button color="info" onClick={this.handleSubmit} className={s.finish_button}>Add next question</Button>
                        <Button color="warning" className={s.finish_button}>Finish</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    question_id: state.quizzes.last_added_quiz_id
});

export  default connect(mapStateToProps, {updateQuiz})(AddQuizQuestion)
