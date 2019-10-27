import React from 'react';
import { connect } from 'react-redux';

function mapStateTo(state) {
    return { counter: state }
}

const Counter = (props) => {
    return (
        <div>
            <p>{props.counter}</p>
        </div>
    );
}

export default connect(mapStateTo)(Counter);