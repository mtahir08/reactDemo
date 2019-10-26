import React from 'react';
import { connect } from 'react-redux';

import { Signup } from './../components/Signup/Signup'
import { AuthActions } from './../Store/Actions'

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (obj, callback) => dispatch(AuthActions.signup(obj, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);