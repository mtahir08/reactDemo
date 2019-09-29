import React from 'react';
import './Signin.css'
function SignIn() {
    return (<div className="root">
        <div className="container">
            <div className="input-box">
                <input className="field" placeholder = "Email Address" type="text" id="email" />
            </div>
            <div className="input-box">
                <input className="field" placeholder="Password" type="password" id="password" />
            </div>
            <button className="btn" >SIGNIN</button>
        </div>
    </div>);
}

export default SignIn;
