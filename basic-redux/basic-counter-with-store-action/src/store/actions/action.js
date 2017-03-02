import ActionTypes from './actionTypes';

class StoreAction {

    static increment() {
        return ActionTypes.INCREMENT
    }

    static decrement() {
        return ActionTypes.DECREMENT
    }
}

export default StoreAction 