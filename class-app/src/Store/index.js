import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";

import {
    RootReducer
} from './Reducers';

const middleware = applyMiddleware(thunk);
let Store = createStore(RootReducer, middleware);

// Store.subscribe(() => {
//     console.log(Store.getState())
// })


export { Store };