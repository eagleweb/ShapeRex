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
            current: 0,
            user_answer: [],
            value: null
        };
    }

    handleChange(event) {
        this.setState({value: event.target.id});
    }

    nextQuestion () {
        this.state.user_answer.push(+this.state.value);
        this.setState({current: this.state.current + 1});
    }

    renderQuiz () {
        const current_question = this.props.questions[this.state.current];
        if (this.state.current === this.props.questions.length || this.props.time_end) {
            return <QuizResult user_answer={this.state.user_answer} quiz_answer={this.props.quiz_answer} />
        } return (
            <Card>
                <CardHeader>{current_question.question}</CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <div>
                                {current_question.answer_variant.map((item, index) =>
                                    <CustomInput
                                        key={item.toString()}
                                        name="customRadio"
                                        type="radio"
                                        id={index+1}
                                        label={item}
                                        onChange={this.handleChange}
                                    />
                                )}
                            </div>
                        </FormGroup>
                        <Button color="success" onClick={this.nextQuestion}>Answer</Button>
                    </Form>
                </CardBody>
                <CardFooter>Current: {this.state.current + 1} Total: {this.props.questions.length}</CardFooter>
            </Card>
        )
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