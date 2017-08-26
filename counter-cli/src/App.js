import React, { Component } from 'react';
import './App.css';

// Custom components
import Counter from './counter';
import TextInput from './input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <TextInput />
      </div>
    );
  }
}

export default App;
