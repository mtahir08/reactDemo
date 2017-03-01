import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Content from './container/content/content';
import About from './components/About/About';
import Services from './components/Services/Services';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Content} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      
    </Route>
  </Router>
),
  document.getElementById('root')
);
