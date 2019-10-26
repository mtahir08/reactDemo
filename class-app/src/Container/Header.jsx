import React from 'react';
import { connect } from 'react-redux';

// Custom components
import { HeaderComponent } from './../components/Header'

const mapStateToProps = (state) => {
    return {
        token: state.AuthReducer.token,
        user: state.AuthReducer.user,
    }
}


const Header = connect(mapStateToProps)(HeaderComponent);
export { Header };
