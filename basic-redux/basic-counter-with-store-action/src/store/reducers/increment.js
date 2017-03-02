import ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    incrementStateValue: 0
}

function incrementCounter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.INCREMENT : {
            let newState = Object.assign({}, state, { incrementStateValue: state.incrementStateValue + action.val });
            return newState;
        }
        default: return state;
    }
}

export default incrementCounter;