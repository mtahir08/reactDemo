import React from 'react';
import { connect } from 'react-redux';

import { SignIn } from './../components/Signin/Signin'
import { AuthActions } from './../Store/Actions'

const mapStateToProps = (state) => {
    return {
        isLoading: state.AuthReducer.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (obj, callback) => dispatch(AuthActions.signin(obj, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);