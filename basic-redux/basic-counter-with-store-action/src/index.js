import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Container from './container/container';

import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <div>
      <Container />
    </div>
  </Provider>
  , document.getElementById('root'));