import { createStore } from 'redux';
import { combineReducers } from 'redux';

import decrementCounter from './reducers/decrement';
import incrementCounter from './reducers/increment';


export const rootReducer = combineReducers({
    incrementCounter,
    decrementCounter
})

let store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState())
})


export default store;