import React, { Component } from 'react';

// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
import { FlatButton, RaisedButton } from 'material-ui';
import logo from './logo.svg';
import './App.css';

/* Simple use of simple material ui components*/

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Input field and button */}
        <TextField floatingLabelText="Floating Label Text" />
        <FlatButton label="Add" />
        <RaisedButton label="My Button" />
      </div>
    );
  }
}

export default App;
