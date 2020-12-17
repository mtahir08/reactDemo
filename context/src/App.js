import React, { useState } from 'react';
import './App.css';
import Text from './Text';

function App() {
  const [theme, setTheme] = useState('red');
  const onClickHandler = () => setTheme('green');
  return (
    <div className="App">
      <h1>Theme</h1>
      <Text theme={theme}/>
      <button onClick={onClickHandler}>Change it</button>
    </div>
  );
}

export default App;
