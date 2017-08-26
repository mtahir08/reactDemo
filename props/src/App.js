import React, { Component } from 'react';
import './App.css';

// Custom components
import ShowData from './components/show_data';
// We want to show child components values in this components
// So here we 
class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      name: ""
    }

  }

  increament() {
    this.setState({ counter: ++this.state.counter })
  }

  decreament() {
    this.setState({ counter: --this.state.counter })
  }
  changeHandler(ev) {
    this.setState({ name: ev.target.value });
  }
  render() {
    return (

      <div className="App">
        <button onClick={this.increament.bind(this)}>Increament</button>
        <button onClick={this.decreament.bind(this)}>Decreament</button><br />
       <input type="text" onChange={(ev) => { this.changeHandler(ev) }} />
        <ShowData show_counter={this.state.counter} show_name={this.state.name} />
      </div>

    );
  }
}

export default App;
