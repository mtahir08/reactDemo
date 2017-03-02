import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateTo(state){
    return {counter: state}
}
class Counter extends Component {
    render() {
        return (
            <div> { this.props.counter } </div>
        );
    }
}
export default connect(mapStateTo)(Counter);