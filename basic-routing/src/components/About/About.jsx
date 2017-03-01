import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
    
    render() {
        return <div>
            About
            <br />
            <div><Link to={{ pathname: `/Services` }} className="btn btn-primary"> Servicest </Link></div>
        </div>
    }

}

export default About;