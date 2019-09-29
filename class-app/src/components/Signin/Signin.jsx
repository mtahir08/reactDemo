import React, { useState } from 'react';

import InputBox from './../../common/InputBox';

import './Signin.css'
function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(email, password);
    return (<div className="root">
        <div className="container">
            <InputBox
                placeholder="Email"
            />
            <InputBox
                placeholder="Password"
            />
            <button className="btn" >SIGNIN</button>
        </div>
    </div>);
}

export default SignIn;
