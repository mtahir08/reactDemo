import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            changedValue: 0
        }

    }
    valueChange(event) {
        this.setState({ changedValue: event.target.value })
    }

    updateClickedValue() {
        this.props.update(Number(this.state.changedValue));
    }
    decrementClickedValue() {
        this.props.update(-Number(this.state.changedValue));
    }
    render() {
        return (
            <div> {this.props.counter} <br />
                <input type="number" id="num" onChange={this.valueChange.bind(this)} /><br />
                <button onClick={this.updateClickedValue.bind(this)}>Increment Me</button>
                <button onClick={this.decrementClickedValue.bind(this)}>Decrement Me</button>
            </div>
        );
    }
}
export default Counter