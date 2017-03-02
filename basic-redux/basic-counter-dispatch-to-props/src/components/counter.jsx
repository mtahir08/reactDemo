import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return { counter: state }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch({ type: "INCREMENT" }),
        decrement: () => dispatch({ type: "DECREMENT" })
    }
}

class Counter extends Component {
    render() {
        return (
            <div> {this.props.counter} <br />
                <button onClick={this.props.increment}>Increment Me</button>
                <button onClick={this.props.decrement}>Decrement Me</button>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);