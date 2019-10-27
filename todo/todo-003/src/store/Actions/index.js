import { ActionTypes } from './ActionsTypes'
const TodoActions = {
    Add: (obj) => {
        return (dispatch) => {
            dispatch({ type: ActionTypes.CREATE_TODO })
            // const url = `https://uit-class.herokuapp.com/api/todo`
            const url = `http://localhost:3001/api/todo`
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            })
                .then(async (response) => {
                    const res = await response.json()
                    if (response.status === 200)
                        return res
                    throw res
                })
                .then((data) => {
                    dispatch({ type: ActionTypes.CREATE_TODO_SUCCESS, payload: data })
                })
                .catch((error) => {
                    console.log({ error })
                    dispatch({ type: ActionTypes.CREATE_TODO_FAILED })
                })
        }

    },
    Get: () => {
        return (dispatch) => {
            dispatch({ type: ActionTypes.GET_TODO })
            // const url = `https://uit-class.herokuapp.com/api/todo`
            const url = `http://localhost:3001/api/todo`
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(async (response) => {
                    const res = await response.json()
                    if (response.status === 200)
                        return res
                    throw res
                })
                .then((data) => {
                    dispatch({ type: ActionTypes.GET_TODO_SUCCESS, payload: data.todo })
                })
                .catch((error) => {
                    console.log({ error })
                    dispatch({ type: ActionTypes.GET_TODO_FAILED })
                })
        }

    },
    Update: (obj) => {
        return (dispatch) => {

            dispatch({ type: 'UPDATE', payload: obj })
        }
    },
    Delete: (id) => {
        return (dispatch) => {
            dispatch({ type: 'DELETE', payload: id })
        }
    },
    Edit: (obj) => {
        return (dispatch) => {
            dispatch({ type: 'EDIT', payload: obj })
        }
    },
}

export default TodoActions 