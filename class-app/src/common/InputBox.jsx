import React from 'react';
import './InputBox'

function InputBox(props) {
    console.log(props);
    return (
        <div className="input-box">
            <input
                className="field"
                placeholder="Email Address"
                type="text"
            // value={email}
            // onChange={(event) => {
            // setEmail(event.target.value)
            // }}
            />
        </div>
    );
}


export default InputBox;
