import React from 'react';
import './CustomInput.css'

function CustomInput(props) {
    return (
        <div className="input-box">
            <input
                className="field"
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}


export { CustomInput };
