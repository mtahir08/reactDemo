import React from 'react';
import './../Signin/Signin.css'
function Signup() {
    return (<div className="root">
        <div className="container">
            <div className="input-box">
                <input className="field" placeholder = "NAME" type="text" id="NAME" />
            </div>
            <div className="input-box">
                <input className="field" placeholder = "Email Address" type="EMAIL" id="email" />
            </div>
            <div className="input-box">
                <input className="field" placeholder="Password" type="password" id="password" />
            </div>
            <button className="btn" >SIGNUP</button>
        </div>
    </div>);
}

export default Signup;
