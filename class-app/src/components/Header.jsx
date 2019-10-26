import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// Custom components
import '../App.css';

function HeaderComponent(props) {
    const history = useHistory()
    const gotoLogin = () => {
        history.push('/')
    }
    if (props.token && props.user._id)
        return (
            <header className="App-header">
                <div to="/" className="header-btn" onClick={() => props.signout(gotoLogin)}>LOGOUT</div>
            </header>
        );
    return (
        <header className="App-header">
            <Link to="/" className="header-btn">LOGIN</Link>
            <Link className="header-btn" to="/signup" >SIGNUP</Link>
        </header>
    );
}

export { HeaderComponent };
