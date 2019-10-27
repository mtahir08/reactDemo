
import { Config } from './../../config'
import { ActionTypes } from './ActionTypes'
const AuthActions = {
    signup: (obj, callback) => {
        // return async (dispatch) => {
        return (dispatch) => {
            dispatch({ type: ActionTypes.SIGNUP })
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
            // try {
            //     const response = await fetch(url, {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify(obj)
            //     })
            //     if (response.status == 200) {
            //         const data = await response.json()
            //         dispatch({ type: ActionTypes.SIGNUP_SUCCESS })
            //         if (callback)
            //             callback()
            //     }
            //     throw response
            // } catch (error) {
            //     console.log({ error })
            //     dispatch({ type: ActionTypes.SIGNUP_FAILED })
            // }


            fetch(url, {
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
                    dispatch({ type: ActionTypes.SIGNUP_SUCCESS })
                    if (callback)
                        callback()
                })
                .catch((error) => {
                    console.log({ error })
                    dispatch({ type: ActionTypes.SIGNUP_FAILED })
                })
        }
    },
    signin: (obj, callback) => {
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
            const url = `${Config.endpoints.auth}/signin`
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
                    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: data })
                    localStorage.setItem("id", data.user.id)
                    localStorage.setItem("token", data.token)
                    if (callback)
                        callback()
                })
                .catch((error) => {
                    console.log({ error })
                    dispatch({ type: ActionTypes.LOGIN_FAILED })
                })
        }
    },
    signout: (callback) => {
        return (dispatch) => {
            localStorage.clear()
            dispatch({ type: ActionTypes.LOGOUT_SUCCESS })
            if (callback)
                callback()

        }
    }
}

export { AuthActions }