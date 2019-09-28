import React, { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(10);
  // let counterState = useState(10);
  // let counter = counterState[0];
  // let setCounter = counterState[1];
  // let [counter, setCounter] = counterState;
  // console.log(counterState);

  let [name, setName] = useState("");

  function updateName() {
    setName("Tahir");
    setCounter(counter + 10);
  }
  return (
    <div className="App">
      {counter} - {name} <br />
      <button onClick={() => { setCounter(counter + 2); }}>Update counter</button>
      <button onClick={updateName}>Update Name</button>
    </div >
  );
}

export default App;
