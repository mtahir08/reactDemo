import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI import
import TextField from 'material-ui/TextField';
import { FlatButton } from 'material-ui';

// Import action

import StoreAction from '../store/actions/action';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }

    }

    // changeHandler(ev) {
    //     this.setState({ [ev.target.id]: ev.target.value })
    // }

    changeEmailHandler(ev) {
        this.setState({ email: ev.target.value })
    }

    changePasswordHandler(ev) {
        this.setState({ password: ev.target.value })
    }
    login = () => {
        console.log(this.state)
        // this.props.login(this.state)
        this.props.doLogin(this.state)
    }
    render() {
        return (
            <div>
                {/* <TextField floatingLabelText="Enter email" type="email" id="email" onChange={() => this.changeHandler} />
                <TextField floatingLabelText="Enter password" type="password" id="password" onChange={() => this.changeHandler} /> */}
                <TextField floatingLabelText="Enter email" type="email" id="email" onChange={(ev) => this.changeEmailHandler(ev)} />
                <TextField floatingLabelText="Enter password" type="password" id="password" onChange={(ev) => this.changePasswordHandler(ev)} />
                <FlatButton label="login" onClick={this.login} />
            </div>
        );
    }
}


// Get apps state and pass it as props 
const mapStateToProps = (state, ownProps) => {
    return { counter: state }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        doLogin: (obj) => dispatch(StoreAction.Login(obj)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);