import React, { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(10);

  // let counterState = useState(0);
  // let [counter, setCounter] = counterState;
  // let counter = counterState[0];
  // let setCounter = counterState[1];
  // console.log(counterState);

  let [name, setName] = useState("");

  // const updateName = () => {
  //   setName("Tahir");
  //   // setCounter(counter + 10);
  //   // updateCounter();
  // }

  // const updateCounter = () => {
  //   setCounter(counter + 10);
  // }

  return (
    <div className="App">
      {/* {counter} - {name} <br />
      <button onClick={() => { setCounter(counter + 2); }}>Update counter</button>
      <button onClick={updateName}>Update Name</button> */}
    </div >
  );
}

export default App;
