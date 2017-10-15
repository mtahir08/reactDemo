import { applyMiddleware, createStore } from 'redux';
// Import thunk from redux-thunk
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers/index";

const middleware = applyMiddleware(thunk, createLogger());
let store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log(store.getState())
})


export default store;