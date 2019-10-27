import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";

import { TodoReducer } from './Reducers';

const middleware = applyMiddleware(thunk);
let store = createStore(TodoReducer, middleware);

export default store;