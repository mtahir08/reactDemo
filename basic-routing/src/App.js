import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Details from './components/Details';
import Home from './components/Home';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/detail/:id" component={Details} />
        <Redirect to='/' />
      </div>
    </Router>
  );
}
export default App;
