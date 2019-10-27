import TodoActions from "../Actions";

// import ActionTypes from '../actions/ActionsTypes';

const INITIAL_STATE = {
    todos: [],
    editingItem: null // {}
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
                todos,
                editingItem: null
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
        case 'EDIT': {
            return {
                ...state,
                editingItem: action.payload,
            }
        }

        default: return state;
    }
}

export { TodoReducer };