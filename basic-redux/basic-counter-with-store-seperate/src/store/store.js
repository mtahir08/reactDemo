import { createStore } from 'redux';
import  counter  from './reducers/reducer'


let store = createStore(counter);

store.subscribe(() => {
  console.log(store.getState())
})


export default store;