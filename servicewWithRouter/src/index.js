import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
