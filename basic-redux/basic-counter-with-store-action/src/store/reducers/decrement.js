import ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    decrementStateValue: 0
}

function decrementCounter(state = INITIAL_STATE, action) {

  switch (action.type) {
    case ActionTypes.DECREMENT: {
      var newState = Object.assign({},state,{decrementStateValue:state.decrementStateValue - action.val})
      return newState
    }
    default: return state;
  }
}

export default decrementCounter;