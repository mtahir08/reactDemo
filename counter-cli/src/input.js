import React, { Component } from 'react';
import './App.css';

class TextInput extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }

    }
    changeHandler(ev) {
        this.setState({ name: ev.target.value });
    }
    render() {
        return (
            <div >
                {/* <input type="text" onChange={(ev) => { this.setState({ name: ev.target.value }) }} /> */}
                <input type="text" onChange={(ev) => { this.changeHandler(ev) }} />
            </div>
        );
    }
}

export default TextInput;
