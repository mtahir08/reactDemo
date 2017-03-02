import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/counter';

import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <div>
      <Counter />
    </div>
  </Provider>
  , document.getElementById('root'));