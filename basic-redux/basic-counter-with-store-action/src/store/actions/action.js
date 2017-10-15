import ActionTypes from './actionTypes';

// class StoreAction {

//     static increment() {
//         return ActionTypes.INCREMENT
//     }

//     static decrement() {
//         return ActionTypes.DECREMENT
//     }
// }

const StoreAction = {
    increment: function () {
        return ActionTypes.INCREMENT
    }, decrement: function () {
        return ActionTypes.DECREMENT
    }
}
export default StoreAction 