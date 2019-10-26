
import { Config } from './../../config'
import { ActionTypes } from './ActionTypes'
const AuthActions = {
    signup: async (obj) => {
        return (dispatch) => {
            dispatch({ type: ActionTypes.LOGIN })
            /**
             * @param fetch(url, {
             * method: 'GET' || 'POST' || 'PUT' || 'DELETE',
             * headers: {
             * 'Accept': 'application/json',
                    'Content-Type': 'application/json',
             *  },
             * body: JSON.stringify(data)
             * })
             */
            const url = `${Config.endpoints.auth}/signup`
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {

                    console.log({ data })
                    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: data })
                })
                .catch((error) => {
                    console.log({ error })
                    dispatch({ type: ActionTypes.LOGIN_FAILED, payload: data })
                })
        }

    }
}

export { AuthActions }