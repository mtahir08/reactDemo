import React, { Component } from 'react';

class Timer extends Component {

  render() {
    const element = (
      <h1>Time Left {this.props.timeLeft}</h1>
    )

    if (this.props.timeLeft === null || this.props.timeLeft === 0) {
      return <div />
    } else return element
  }
}

export default Timer;