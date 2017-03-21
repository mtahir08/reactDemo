import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.arr = [];
    }
    componentDidMount(){
        console.log(this.props.runthis)

    }
    addTodo() {
        this.arr.push(document.getElementById("todo").value);
        console.log(this.arr);
    }

    render() {
        let list = this.arr.map(function(item, i){
                return <li>{item}</li>
            },this)
        let content = <div><ul>{list}</ul></div>
        return content
    }
}

export default List