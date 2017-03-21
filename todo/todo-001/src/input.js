import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super();
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo() {
        let value = document.getElementById("todo").value;
        this.props.addThis(value);
    }

    render() {
        return <div>
                    <input type="text" id="todo" />
                    <button onClick={this.addTodo}> Add </button>
               </div>
    }
}

export default Input