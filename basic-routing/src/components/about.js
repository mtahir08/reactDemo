import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class About extends Component {
  render() {
    return (
      <div>
        This is About page
        <Link to="/about/detail">Details</Link>
      </div>
    );
  }
}

export default About;
