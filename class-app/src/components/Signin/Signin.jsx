import React, { useState } from 'react';

import { CustomInput, CustomButton } from './../../common';

import './Signin.css'
function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (<div className="root">
        <div className="container">
            <CustomInput
                value={email}
                type="email"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
            />
            <CustomInput
                value={password}
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
            />
            <CustomButton
                name="SINGIN"
                clickHandler={() => { props.signin({ email, password }) }}
            />
        </div>
    </div>);
}

export { SignIn };
