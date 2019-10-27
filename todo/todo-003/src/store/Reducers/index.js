import { ActionTypes } from '../Actions/ActionsTypes';

const INITIAL_STATE = {
    todos: [],
    isLoading: false
}

function TodoReducer(state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {

        // CREATE || ADD
        case ActionTypes.CREATE_TODO: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionTypes.CREATE_TODO_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                todos: [...state.todos, action.payload]
            }
        }
        case ActionTypes.CREATE_TODO_FAILED: {
            return {
                ...state,
                isLoading: false,
            }
        }

        // GET

        case ActionTypes.GET_TODO: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionTypes.GET_TODO_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        }
        case ActionTypes.GET_TODO_FAILED: {
            return {
                ...state,
                isLoading: false,
            }
        }

        // DELETE
        case ActionTypes.DELETE_TODO: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionTypes.DELETE_TODO_SUCCESS: {
            const todos = [...state.todos]
            const index = todos.findIndex((todo) => todo._id === action.payload)
            todos.splice(index, 1)
            return {
                ...state,
                isLoading: false,
                todos
            }
        }

        case ActionTypes.DELETE_TODO_FAILED: {
            return {
                ...state,
                isLoading: false,
            }
        }

        // UDDATE
        case ActionTypes.UPDATE_TODO: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionTypes.UPDATE_TODO_SUCCESS: {
            const todos = [...state.todos]
            const index = todos.findIndex((todo) => todo._id === action.payload._id)
            todos.splice(index, 1, action.payload)
            return {
                ...state,
                todos,
                editingItem: null,
                isLoading: false,
            }
        }

        case ActionTypes.UPDATE_TODO_FAILED: {
            return {
                ...state,
                isLoading: false,
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