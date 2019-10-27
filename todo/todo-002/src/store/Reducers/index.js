// import ActionTypes from '../actions/ActionsTypes';

const INITIAL_STATE = {
    todos: [],
    token: "",
    user: {}
}

// action = {type:"", payload:{}||number||""}
function TodoReducer(state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {

        // case ActionTypes.ADD: {
        case 'ADD': {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }

        // case ActionTypes.UPDATE: {
        case 'UPDATE': {
            const todos = [...state.todos]
            const index = todos.findIndex((todo) => todo.id === action.payload.id)
            todos.splice(index, 1, action.payload)
            return {
                ...state,
                todos
            }
        }

        // case ActionTypes.DELETE: {
        case 'DELETE': {
            const todos = [...state.todos]
            const index = todos.findIndex((todo) => todo.id === action.payload)
            todos.splice(index, 1)
            return {
                ...state,
                todos
            }
        }

        default: return state;
    }
}

export { TodoReducer };