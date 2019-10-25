import React from 'react';
import { connect } from 'react-redux';

// import StoreAction from '../store/actions/action';
import actionType from '../store/actions/actionTypes';

import Counter from '../components/counter';
import Data from '../components/data';

function mapStateToProps(state) {
    return {
        incMe: state.incrementCounter.incrementStateValue,
        dec: state.decrementCounter.decrementStateValue
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (value) => {
            return dispatch({ type: actionType.INCREMENT, val: value })
        },
        decrement: () => dispatch({ type: actionType.DECREMENT })
        // increment: (value) => {
        //     return dispatch({ type: StoreAction.increment(), val: value })
        // },
        // decrement: () => dispatch({ type: StoreAction.decrement() })
    }
}

const Container = (props) => {

    return (
        <div>
            <Counter increment={props.increment} decrement={props.decrement} />
            <Data dec={props.dec} incMe={props.incMe} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);