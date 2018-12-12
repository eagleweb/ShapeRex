import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authActions';
import s from './auth.module.css'
import {Button, Form, FormGroup, FormFeedback, Jumbotron, Input} from 'reactstrap';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        };
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        const { errors } = this.state;
        return(
            <div className={s.container}>
                <Jumbotron>
                <h2>Registration</h2>
                <Form onSubmit={ this.handleSubmit }>
                    <FormGroup>
                        <Input
                            className={s.input}
                            invalid={!!errors.name}
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={ this.handleInputChange }
                            value={ this.state.name }
                        />
                        <FormFeedback>{errors.name}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className={s.input}
                            invalid={!!errors.email}
                            type="email"
                            placeholder="Email"
                            name="email"
                            id="email"
                            onChange={ this.handleInputChange }
                            value={ this.state.email }
                        />
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className={s.input}
                            invalid={!!errors.password}
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={ this.handleInputChange }
                            value={ this.state.password }
                        />
                        <FormFeedback>{errors.password}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className={s.input}
                            invalid={!!errors.password}
                            type="password"
                            placeholder="Confirm Password"
                            name="password_confirm"
                            onChange={ this.handleInputChange }
                            value={ this.state.password_confirm }
                        />
                        <FormFeedback>{errors.password_confirm}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" color="primary">
                            Register User
                        </Button>
                    </FormGroup>
                </Form>
                </Jumbotron>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.auth_error
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register))