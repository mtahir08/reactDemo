import React, { useState } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return { counter: state }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (num) => {
            return dispatch({ type: "INCREMENT", val: num })
        },
        decrement: (num) => dispatch({ type: "DECREMENT", val: num })
    }
}

const Counter = (props) => {
    const [changedValue, setChangedValue] = useState(0)
    return (
        <div> {props.counter} <br />
            <input type="number" id="num" onChange={(event) => { setChangedValue(event.target.value) }} /><br />
            <button onClick={() => props.increment(changedValue)}>Increment Me</button>
            <button onClick={() => props.decrement(changedValue)}>Decrement Me</button>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);