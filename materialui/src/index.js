import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// material ui theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// material ui theme

ReactDOM.render(<MuiThemeProvider><App/></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
