import React from 'react';
import './Signin.css'
function SignIn() {
    return (<div>

        <div className="input-box">
            <label htmlFor="email" className="label">Email Address</label>
            <input type="text" id="email" />
        </div>
    </div>);
}

export default SignIn;
