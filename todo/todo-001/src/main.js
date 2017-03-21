import React, { Component } from 'react';
import List from './list';
import Input from './input';
class Main extends Component {
    constructor(props) {
        super(props);
        this.arr = [];
        this.addEventHandler = this.addEventHandler.bind(this); 
        this.state={
            value : null
        }
    }
    addEventHandler(event){
        this.setState({
            value : event 
        })
        console.log("event",this.state.value)
    }
    render() {
        return <div>
            <List runthis={this.state.value}/>
            <Input addThis={this.addEventHandler}/>
            </div>
    }
}

export default Main