import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CustomButton, CustomInput } from './../../common';
import './../Signin/Signin.css'

const Signup = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const gotoSignin = () => {
        history.push('/')
    }

    return (<div className="root">
        <div className="container">

            <CustomInput
                value={name}
                type="text"
                placeholder="Enter name"
                onChange={(event) => setName(event.target.value)}
            />
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
                name="SIGNUP"
                disabled={props.isLoading}
                clickHandler={() => { props.signup({ name, email, password }, gotoSignin) }}
            />
        </div>
    </div>);
}

export { Signup };
