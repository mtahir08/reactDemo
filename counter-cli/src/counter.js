import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }

    }
    increament() {
        this.setState({ counter: ++this.state.counter })
    }
    decreament() {
        this.setState({ counter: --this.state.counter })
    }
    render() {
        return (
            <div >
                <div className="App-intro">{this.state.counter}</div>
                <button onClick={this.increament.bind(this)}>Increament</button>
                {/* <button onClick={() => this.increament()}>Increament</button> */}
                <button onClick={this.decreament.bind(this)}>Decreament</button>
                {/* <button onClick={() => this.increament()}>Increament</button> */}
            </div>
        );
    }
}

export default Counter;
