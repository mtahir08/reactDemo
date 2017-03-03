import { createStore } from 'redux';
import { combineReducers } from 'redux';

import todoReducer from './reducers/todoReducer';

export const rootReducer = combineReducers({
  todoReducer
})

let store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState())
})


export default store;