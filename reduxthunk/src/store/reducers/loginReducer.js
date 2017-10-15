import ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    user: {}

}

function loginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.LOGIN: {
            let newState = Object.assign({}, state, { user: {} });
            return newState;

        }
        case ActionTypes.LOGIN_SUCCESS: {
            let newState = Object.assign({}, state, { user: action.payload });
            return newState;

        }
        case ActionTypes.LOGIN_FAILED: {
            let newState = Object.assign({}, state, { user: {} });
            return newState;
        }
        default: return state;
    }
}

export default loginReducer;