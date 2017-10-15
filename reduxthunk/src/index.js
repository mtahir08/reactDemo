import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
// import Container from './container/container';
import './config/fbconfig';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Component from './components/counter';

import './index.css';


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <div>
        <Component />
      </div>
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));