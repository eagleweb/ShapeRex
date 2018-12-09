import React, { Component } from 'react'

class Question extends Component {
    constructor(props) {
        super(props);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.state = {
            questions: props.questions,
            length: props.questions.length,
            current: 0,
            answer: []
        };
    }

    nextQuestion () {
        this.setState({current: ++this.state.current});
    }

    render() {
        const current_question = this.state.questions[this.state.current];
        return (
            <React.Fragment>
                <p>{current_question.question}</p>
                <ul>
                    {current_question.answer_variant.map((item, index) => <li key={item.toString()}>{item}</li>)}
                </ul>
                <button onClick={this.nextQuestion}>Next</button>
            </React.Fragment>
        )
    }
}

export default Question