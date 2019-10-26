import React from 'react';

function CustomButton(props) {
    return (
        <button
            className="btn"
            onClick={() => { props.clickHandler() }}
            disabled={props.disabled}
        >{props.name}</button>
    );
}

export { CustomButton };
