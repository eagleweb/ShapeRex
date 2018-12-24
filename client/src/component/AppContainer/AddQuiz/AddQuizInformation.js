import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addQuiz } from '../../../actions/quizActions'
import s from './addquiz.module.css'
import {Button, Form, FormGroup, FormFeedback, Label, Input, FormText} from 'reactstrap';

class AddQuizInformation extends Component {

    constructor() {
        super();
        this.quiz_image = React.createRef();
        this.state = {
            quiz_name: '',
            quiz_description: '',
            errors: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.errors) {
            return {
                errors: props.errors
            }
        }
        return null;
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit() {
        const data = new FormData();
        data.append('quiz_name', this.state.quiz_name);
        data.append('quiz_description', this.state.quiz_description);
        data.append('file', this.quiz_image.current.files[0]);

        this.props.addQuiz(data, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return(
            <div className={s.add_quiz_form}>
                <h2>Add quiz</h2>
                <Form>
                    <FormGroup>
                        <Label>Quiz name</Label>
                        <Input
                            invalid={!!errors.quiz_name}
                            type="text"
                            placeholder="Enter quiz name"
                            name="quiz_name"
                            onChange={ this.handleInputChange }
                            value={ this.state.quiz_name }
                        />
                        <FormFeedback>{errors.quiz_name}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>Quiz description</Label>
                        <Input
                            invalid={!!errors.quiz_description}
                            type="textarea"
                            placeholder="Enter quiz description"
                            name="quiz_description"
                            onChange={ this.handleInputChange }
                            value={ this.state.quiz_description }
                        />
                        <FormFeedback>{errors.quiz_description}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>Quiz image</Label>
                        <Input
                            invalid={!!errors.quiz_image}
                            type="file"
                            name="quiz_image"
                            accept="image/jpeg,image/jpg,image/png"
                            innerRef={this.quiz_image}
                        />
                        <FormText color="muted">
                            Your can only download jpg and png file
                        </FormText>
                        <FormFeedback>{errors.quiz_image}</FormFeedback>
                    </FormGroup>
                    <FormGroup >
                        <Button onClick={this.handleSubmit} color="success" block>Next</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

AddQuizInformation.propTypes = {
    addQuiz: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    errors: state.quizzes.error
});

export  default connect(mapStateToProps, {addQuiz})(AddQuizInformation)