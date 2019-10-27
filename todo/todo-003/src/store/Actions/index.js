import { ActionTypes } from './ActionsTypes'
const base_url = 'https://uit-class.herokuapp.com/api'
const TodoActions = {
    Add: (obj) => {
        return (dispatch) => {
            dispatch({ type: ActionTypes.CREATE_TODO })
            const url = `${base_url}/todo`
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
                    dispatch({ type: ActionTypes.CREATE_TODO_SUCCESS, payload: data.todo })
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
            const url = `${base_url}/todo`
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
            dispatch({ type: ActionTypes.UPDATE_TODO })
            const url = `${base_url}/todo`
            fetch(url, {
                method: 'PUT',
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
                    dispatch({ type: ActionTypes.UPDATE_TODO_SUCCESS, payload: data.todo })
                })
                .catch((error) => {
                    console.log({ error })
                    dispatch({ type: ActionTypes.UPDATE_TODO_FAILED })
                })
        }
    },
    Delete: (id) => {
        return (dispatch) => {
            dispatch({ type: ActionTypes.DELETE_TODO })
            const url = `${base_url}/todo/${id}`
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => {
                    if (response.status === 200)
                        return response.json()
                    throw response
                })
                .then((data) => {
                    dispatch({ type: ActionTypes.DELETE_TODO_SUCCESS, payload: id })
                })
                .catch((error) => {
                    console.log({ error })
                    dispatch({ type: ActionTypes.DELETE_TODO_FAILED })
                })
        }
    },
    Edit: (obj) => {
        return (dispatch) => {
            dispatch({ type: 'EDIT', payload: obj })
        }
    },
}

export default TodoActions 