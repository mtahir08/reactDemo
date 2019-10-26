import React from 'react';
import { connect } from 'react-redux';

// Custom components
import { HeaderComponent } from './../components/Header'
import { AuthActions } from './../Store/Actions'

const mapStateToProps = (state) => {
    return {
        token: state.AuthReducer.token,
        user: state.AuthReducer.user,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signout: (callback) => dispatch(AuthActions.signout(callback))
    }
}


const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
export { Header };
