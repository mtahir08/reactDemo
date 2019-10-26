import { ActionTypes } from '../Actions';

const INITIAL_STATE = {
    isLoading: false,
    user: {}
}

function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        /* ---------------------------------- LOGIN START--------------------------------- */
        case ActionTypes.LOGIN: {
            return {
                ...state,
                isLoading: true,
                user: {},
            }
        }
        case ActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            }
        }
        case ActionTypes.LOGIN_FAILED: {
            return {
                ...state,
                isLoading: false,
            }
        }

        /* ------------------------------ SIGNUP START ------------------------------ */

        case ActionTypes.SIGNUP: {
            return {
                ...state,
                isLoading: true,
                user: {},
            }
        }
        case ActionTypes.SIGNUP_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            }
        }
        case ActionTypes.SIGNUP_FAILED: {
            return {
                ...state,
                isLoading: false,
            }
        }
        default: return state;
    }
}

export { AuthReducer };