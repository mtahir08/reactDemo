import React, { useState } from 'react';

const Counter = (props) => {
    let [num, setNum] = useState(0)

    const update = (flag) => {
        if (flag === 'increment') {
            props.increment(Number(num));
        } else if (flag === 'decrement') {
            props.decrement(Number(num));

        }
    }

    return (
        <div>
            <input type="number" value={num} onChange={(event) => { setNum(event.target.value) }} /><br />
            <button onClick={() => update('increment')}>Increment Me</button>
            <button onClick={() => update('decrement')}>Decrement Me</button>
        </div>
    );
}
export default Counter