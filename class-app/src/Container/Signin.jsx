import React from 'react';
import { connect } from 'react-redux';

import { SignIn } from './../components/Signin/Signin'
import { AuthActions } from './../Store/Actions'

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (obj) => dispatch(AuthActions.signin(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);