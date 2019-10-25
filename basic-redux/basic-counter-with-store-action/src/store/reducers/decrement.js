import ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  decrementStateValue: 0
}

function decrementCounter(state = INITIAL_STATE, action) {

  switch (action.type) {
    case ActionTypes.DECREMENT: {
      return {
        ...state,
        decrementStateValue: state.decrementStateValue - action.val
      }
    }
    default: return state;
  }
}

export default decrementCounter;