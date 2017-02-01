import React, { Component } from 'react';
import './App.css';

class App extends Component {
 render() {
    function formatName(user) {
      return user.firstName + " " + user.lastName;
    }

    const user = {
      firstName: "Muhammad",
      lastName: "Tahir"
    }

    const element = (
      <h1>Hello, {formatName(user)}</h1>
    )

    return (
      element
    );
  }
}

export default App;