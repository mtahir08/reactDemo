import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return { counter: state }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => {
            var num = +document.getElementById("num").value;
            return dispatch({ type: "INCREMENT", val: num })

        },
        decrement: () => dispatch({ type: "DECREMENT" })
    }
}

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            changedValue: 0
        }
    }
    valueChange(event) {
        this.setState({ changedValue: event.target.value })
        console.log(event.target.value)
    }
    render() {
        return (
            <div> {this.props.counter} <br />
                <input type="number" id="num" onChange={this.valueChange.bind(this)} /><br />
                <button onClick={this.props.increment.bind(this)}>Increment Me</button>
                <button onClick={this.props.decrement}>Decrement Me</button>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);