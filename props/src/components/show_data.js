import React, { Component } from 'react';
import '../App.css';

class ShowData extends Component {
    render() {
        return (
            <div >
                <div className="App-intro">{this.props.show_counter}</div>
                <div className="App-intro">{this.props.show_name}</div>
            </div>
        );
    }
}

export default ShowData;
