import React, { Component } from 'react';
import {
    Link
} from 'react-router';

class Services extends Component {

    render() {
        return <div><Link to={{ pathname: `/About` }} className="btn btn-primary"> About </Link></div>
    }

}

export default Services;