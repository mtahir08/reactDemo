import React, { useState, useEffect } from 'react';
import './App.css';

function Counter() {
    let [count, setCount] = useState(0)
    const increament = () => {
        setCount(count + 1)

    }
    const decreament = () => {
        setCount(count - 1)
    }
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(count => {
    //             console.log(count);
    //             return count + 1
    //         })
    //     }, 1000)
    //     // return () => clearInterval(interval)
    // }, [])
    return (
        <div >
            <div className="App-intro">{count}</div>
            <button onClick={increament}>Increament</button>
            {/* <button onClick={() => increament()}>Increament</button> */}
            <button onClick={decreament}>Decreament</button>
            {/* <button onClick={() => increament()}>Increament</button> */}
        </div>
    );
}

export default Counter;
