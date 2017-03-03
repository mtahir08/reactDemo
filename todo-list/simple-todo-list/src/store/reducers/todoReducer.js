import ActionTypes from '../actions/actionTypes';
// import INITIAL_STATE from '../../data/data';
const INITIAL_STATE = {
    todo: {
        todoList: [
            // { item: "", completed: false }
        ]
    }
}




function todoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.ADD: {
            let newState = Object.assign({}, state);
            newState.todo.todoList.push({item:action.payload, completed: false });
            return newState;
        }
        case ActionTypes.DELETE: {
            let newState = Object.assign({}, state);
            newState.todo.todoList.splice(action.payload, 1);
            return newState;
        }
        case ActionTypes.COMPLETED: {
            let newState = Object.assign({}, state);
            newState.todo.todoList.splice(action.payload.index, 1, { item:action.payload.value, completed: action.payload.flag })
            return newState;
        }
        case ActionTypes.UPDATE: {
            let newState = Object.assign({}, state, { value: action.payload });
            return newState;
        }
        default: return state;
    }
}

export default todoReducer;