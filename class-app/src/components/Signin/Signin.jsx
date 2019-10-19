import React, { useState } from 'react';

import InputBox from './../../common/InputBox';

import './Signin.css'
function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(props);
    return (<div className="root">
        <div className="container">
            <InputBox
                placeholder="Email"
            />
            <InputBox
                placeholder="Password"
            />
            <button className="btn" onClick={() => { props.history.push('/dashboard') }} >SIGNIN</button>
        </div>
    </div>);
}

export default SignIn;
