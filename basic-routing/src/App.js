import React, { Component } from 'react';
import './App.css';

import Router from './js/router.js'
class App extends Component {
  render() {
    const mapping = {
      '#profile': <div>Profile(<a href="#">Home</a>)</div>,
      '#accounts': <div>Accounts(<a href="#">Home</a>)</div>,
      '*': <div>Dashboard<br />
        <a href="#profile">Profile</a>
        <br />
        <a href="#accounts">Accounts</a>
      </div>
    }

    const element = <Router mapping={mapping} />
    return element
  }
}
export default App;