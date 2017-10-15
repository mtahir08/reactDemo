import ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    incrementStateValue: 0
}

function incrementCounter(state = INITIAL_STATE, action) {
    console.log("action.type", action.type);
    switch (action.type) {
        
        case ActionTypes.INCREMENT : {
            let newState = Object.assign({}, state, { incrementStateValue: state.incrementStateValue + action.val });
            return newState;
        }
        default: return state;
    }
}

export default incrementCounter;