import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Main from './container/main';
// Material Ui imported 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <Main />
      </div>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));