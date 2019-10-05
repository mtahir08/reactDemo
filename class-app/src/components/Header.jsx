import React from 'react';
import { Link } from 'react-router-dom';

// Custom components
import '../App.css';


function Header() {
    return (
        <header className="App-header">
            <Link to="/" className="header-btn">LOGIN</Link>
            <Link className="header-btn" to="/signup" >SIGNUP</Link>
        </header>
    );
}

export { Header };
