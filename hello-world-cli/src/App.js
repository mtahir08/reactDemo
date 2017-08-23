import React, { Component } from 'react';
import './App.css';

// Custom components
import Counter from './counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
