import React, { Component } from 'react';
import './App.css';


class List extends Component {

    render() {
        const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
        return (
            <a href={url}>{this.props.label}</a>
        )
    }
}

export default List;