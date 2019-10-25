import React, { useState } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return { counter: state }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (num) => dispatch({ type: "INCREMENT", payload: num }),
        decrement: (num) => dispatch({ type: "DECREMENT", payload: num })
    }
}

const Counter = (props) => {
    let [num, setNum] = useState(0);
    return (
        <div> {props.counter} <br />
            <input type="number" value={num} onChange={(ev) => { setNum(Number(ev.target.value)) }} />
            <button onClick={() => props.increment(num)}>Increment Me</button>
            <button onClick={() => props.decrement(num)}>Decrement Me</button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);