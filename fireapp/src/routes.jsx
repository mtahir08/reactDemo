import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Form from './Form';
import ShowList from './showList';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ShowList} />
          <Route exact path="/add" component={Form} />
        </div>
      </Router>
    );
  }
}
export default Routes;
