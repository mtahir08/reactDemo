import React, { Component } from 'react';
import { connect } from 'react-redux';

import StoreAction from '../store/actions/action';
import Counter from '../components/counter';

function mapStateToProps(state) {
    return {
        incMe: state.incrementCounter.incrementStateValue,
        dec: state.decrementCounter.decrementStateValue
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (value) => {
            // var num = +document.getElementById("num").value;
            return dispatch({ type: StoreAction.increment(), val: value })
        },
        decrement: () => dispatch({ type: StoreAction.decrement() })
    }
}

class Container extends Component {
    constructor() {
        super();
    }

    updateCounter(value) {
        this.props.increment(value);
    }
    render() {
        return (
            <div>
                <Counter counter={this.props.incMe} update={this.updateCounter.bind(this)} />

            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);