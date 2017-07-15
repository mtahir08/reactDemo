import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  ref = firebase.database().ref();
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameArray: {}
    }
  }

  componentDidMount() {
    this.ref.child("users").on("value", (snapshot) => {
      let data = snapshot.val();
      if(data)this.setState({ nameArray: data })      
    })
  }
  handleChange(ev) {
    this.setState({ name: ev.target.value })
  }
  sendToFirebase(ev) {
    ev.preventDefault();
    this.ref.child("users").push({ name: this.state.name });
    this.setState({name:""})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <form onSubmit={this.sendToFirebase.bind(this)}>
            <input type="text" id="name" onChange={this.handleChange.bind(this)} value={this.state.name}/>
            <input type="submit" value="Send to Firebase" />
          </form>
          <ul style={{listStyle:'none'}}>
            {Object.keys(this.state.nameArray).map((val) => {
              return <li key={val}>{this.state.nameArray[val].name}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
