import { createStore } from 'redux';

import {
    RootReducer
} from './Reducers';

let Store = createStore(RootReducer);

// Store.subscribe(() => {
//     console.log(Store.getState())
// })


export { Store };