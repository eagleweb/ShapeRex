import React, { Component } from 'react'
import QuizResult from './QuizResult'
import { Button, Form, FormGroup, CustomInput, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

class Question extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.renderQuiz = this.renderQuiz.bind(this);

        this.state = {
            questions: props.questions,
            quiz_answer: props.quiz_answer,
            length: props.questions.length,
            current: 0,
            answer: [],
            value: null
        };
    }

    handleChange(event) {
        this.setState({value: event.target.id});
    }

    nextQuestion () {
        this.state.answer.push(+this.state.value);
        this.setState({current: this.state.current + 1});
    }

    renderQuiz () {
        const current_question = this.state.questions[this.state.current];
        if (this.state.current === this.state.length) {
            return <QuizResult answer={this.state.answer} quiz_answer={this.state.quiz_answer} />
        } return (
            <Card>
                <CardHeader>{current_question.question}</CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <div>
                                {current_question.answer_variant.map((item, index) =>
                                    <CustomInput key={item.toString()} name="customRadio" type="radio" id={index+1} label={item} onChange={this.handleChange} />
                                )}
                            </div>
                        </FormGroup>
                        <Button color="success" onClick={this.nextQuestion}>Answer</Button>
                    </Form>
                </CardBody>
                <CardFooter>Current question: {this.state.current + 1} Total: {this.state.length}</CardFooter>
            </Card>)
    }

    render() {
        return (
            <React.Fragment>
                {this.renderQuiz()}
            </React.Fragment>
        )
    }
}

export default Question