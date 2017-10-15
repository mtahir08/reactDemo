import ActionTypes from './actionTypes';
import helpers from '../../utils/helper';

class StoreAction {

    static Login(obj) {
        console.log(obj);
        // return dispatch => { dispatch(LoginInProgress()); helpers.Login(obj, dispatch); }
        // We can also write object directly instead of function call
        return dispatch => { dispatch({ type: ActionTypes.LOGIN }); helpers.Login(obj, dispatch); }
    }

}

function LoginInProgress() {
    return {
        type: ActionTypes.LOGIN
    }
}

export default StoreAction 