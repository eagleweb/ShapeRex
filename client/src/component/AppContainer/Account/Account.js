import React, { Component } from 'react'
import { connect } from 'react-redux'
import s from './account.module.css'
import {Button} from 'reactstrap'
import smile from '../../../assets/img/smile.png'

class Account extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.account_form}>
                <h1>Hello {this.props.user.name}!</h1>
                <img src={smile} alt="account image" />
                <Button color="danger">Delete account</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
};

export default connect(mapStateToProps)(Account)