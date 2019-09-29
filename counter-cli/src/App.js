import React from 'react';
import './App.css';

// Custom components
import Counter from './counter';
import TextInput from './input';

const App = () => {
  return (
    <div className="App">
      <Counter />
      <TextInput />
    </div>
  );
}

export default App;
