import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Counter from './components/counter';

import './index.css';
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return state += 1
    }
    case 'DECREMENT': {
      return state -= 1
    }
    default: return state;
  }
}

let store = createStore(counter);

store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <div>
    <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>Increment</button><br />
    <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>Decrement</button><br />
  </div>
  , document.getElementById('root'));