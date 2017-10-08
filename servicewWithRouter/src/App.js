import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import About from "./components/About";

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
class App extends Component {
  render() {
    console.log("APP", this.props)

    return (
      <Router>
        <div>
          <ul>
            <li> <Link to="/" > Home </Link> </li>
            <li> <Link to="/about" > About us </Link> </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
