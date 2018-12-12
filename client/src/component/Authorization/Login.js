import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import s from './auth.module.css'
import {Button, Form, FormGroup, FormFeedback, Jumbotron, Input} from 'reactstrap';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
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
            email: this.state.email,
            password: this.state.password,
        };
        this.props.loginUser(user);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
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

    render() {
        const {errors} = this.state;
        return(
            <div className={s.container}>
                <Jumbotron>
                <h2>Login</h2>
                <Form onSubmit={ this.handleSubmit }>
                    <FormGroup>
                        <Input
                            className={s.input}
                            invalid={!!errors.email}
                            type="email"
                            placeholder="Email"
                            name="email"
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
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" color="primary">
                            Login User
                        </Button>
                    </FormGroup>
                </Form>
                </Jumbotron>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.auth_error
});

export  default connect(mapStateToProps, { loginUser })(Login)