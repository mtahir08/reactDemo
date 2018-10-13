import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/about';
import Contact from './components/contact';
import Details from './components/details';
import Home from './components/home';
import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <App />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/detail/:id" component={Details} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>,
  document.getElementById('root')
);
