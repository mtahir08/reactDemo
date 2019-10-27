import { createStore } from 'redux';

import { TodoReducer } from './Reducers';

let store = createStore(TodoReducer);


// store.subscribe(() => {
//     console.log("subscribe start")
//     console.log(store.getState())
//     console.log("subscribe end")
// })

export default store;