import * as firebase from 'firebase';

import ActionTypes from '../store/actions/actionTypes';

let helpers = {
    Login: function (user, dispatch) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                console.log(res)
                // dispatch(LoginSuccess(res))
                dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: res })
            })
            .catch((e) => {
                switch (e.code) {
                    case "auth/wrong-password": // wrong password on sign in
                        console.log(e.message)
                        break;
                    case "auth/user-not-found": // user not found on sign in on wrong email
                        console.log(e.message)
                        break;
                }
                // LoginFailed(e)
                dispatch({ type: ActionTypes.LOGIN_FAILED, payload: e })

            })
    }
}

function LoginSuccess(payload) {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: payload
    }
}
function LoginFailed(payload) {
    return {
        type: ActionTypes.LOGIN_FAILED,
        payload: payload
    }
}

export default helpers;