import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class Counter extends Component {

    addTodoList(){
        var text = document.getElementById("add").value
        if(text != "")this.props.addTodoList(text);
        document.getElementById("add").value = ""
    }
    
    render() {
        const TextFieldExampleSimple = () => (
            <div>
                <TextField  floatingLabelText="Enter Todo" id="add" /> <RaisedButton label="Add" onClick={this.addTodoList.bind(this)}/>
            </div>
        )
        return TextFieldExampleSimple()
    }
}
export default Counter