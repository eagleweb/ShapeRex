import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateQuiz } from '../../../actions/quizActions'
import s from './addquiz.module.css'
import {Button, Form, FormGroup, FormFeedback, Input, InputGroup, InputGroupAddon, Label} from 'reactstrap';

class AddQuizQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prevPage: this.props.match.params.page,
            answer_count: 1,
            question: '',
            answer: '',
            errors: {},
            answer_variant_1: '',
            answer_variant_2: '',
            answer_variant_3: '',
            answer_variant_4: '',
            answer_variant_5: '',
            answer_variant_6: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.renderAnswerVariant = this.renderAnswerVariant.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.match.params.page !== state.prevPage) {
            return {
                prevPage: props.match.params.page,
                answer_count: 1,
                question: '',
                answer: '',
                errors: {},
                answer_variant_1: '',
                answer_variant_2: '',
                answer_variant_3: '',
                answer_variant_4: '',
                answer_variant_5: '',
                answer_variant_6: ''
            };
        }
        if (props.errors) {
            return {
                errors: props.errors
            };
        }
        return null;
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit() {
        const newArray = [];
        for (let i = 0; i < this.state.answer_count; i++) {
            let temp = this.state['answer_variant_'+(i+1)];
            newArray.push(temp);
        }

        const data = {
            answer: this.state.answer,
            question: {
                question: this.state.question,
                answer_variant: newArray
            }
        };
        {console.log(data)}

        this.props.updateQuiz(this.props.question_id, data, this.props.history, +this.state.prevPage+1);
    }

    renderAnswerVariant () {
        let arr = [];
        for (let i = 0; i < this.state.answer_count; i++) {
            arr.push(
            <InputGroup key={i}>
                <InputGroupAddon addonType="prepend">{'Answer #' + (i+1)}</InputGroupAddon>
                <Input
                    type="text"
                    name={'answer_variant_'+(i+1)}
                    placeholder="Enter your answer variant"
                    onChange={this.handleInputChange}
                    value={this.state['answer_variant_'+(i+1)]}
                />
            </InputGroup>
            )
        }
        return arr;
    }

    render() {
        const {errors} = this.state;
        return(
            <div className={s.add_quiz_form}>
                <h2>Add question</h2>
                <Form>
                    <Label>Question #{this.state.prevPage}</Label>
                    <InputGroup className={s.question_input}>
                        <InputGroupAddon addonType="prepend">Question</InputGroupAddon>
                        <Input
                            invalid={!!errors.question}
                            type="text"
                            name="question"
                            placeholder="Enter your question here"
                            onChange={ this.handleInputChange }
                            value={this.state.question}
                        />
                        <FormFeedback>{errors.question}</FormFeedback>
                    </InputGroup>
                    { this.renderAnswerVariant()}
                    <Button
                        className={s.question_button}
                        outline
                        color="success"
                        onClick = {() => this.setState({answer_count: this.state.answer_count + 1})}
                        disabled={this.state.answer_count === 6}
                    >Add answer</Button>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Right answer</InputGroupAddon>
                        <Input
                            invalid={!!errors.answer}
                            type="text"
                            name="answer"
                            onChange={ this.handleInputChange }
                            value={this.state.answer}
                            placeholder="Enter number of right answer"
                        />
                        <FormFeedback>{errors.answer}</FormFeedback>
                    </InputGroup>
                    <FormGroup>
                        <Button
                            color="info"
                            onClick={this.handleSubmit}
                            className={s.finish_button}
                        >Add next question</Button>
                        <Button
                            color="warning"
                            onClick={() => this.props.history.push('/quiz')}
                            className={s.finish_button}
                        >Finish</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    question_id: state.quizzes.last_added_quiz_id,
    errors: state.quizzes.error
});

export  default connect(mapStateToProps, {updateQuiz})(AddQuizQuestion)
