import ActionTypes from './actionTypes';

class StoreAction {

    static add() {
        return ActionTypes.ADD
    }

    static delete() {
        return ActionTypes.DELETE
    }

    static updated() {
        return ActionTypes.UPDATE
    }

    static completed() {
        return ActionTypes.COMPLETED
    }
    
}

export default StoreAction 