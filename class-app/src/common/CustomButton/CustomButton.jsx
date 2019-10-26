import React from 'react';

function CustomButton(props) {
    return (
        <button className="btn" onClick={() => { props.clickHandler() }} >{props.name}</button>
    );
}

export { CustomButton };
