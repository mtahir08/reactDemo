import React from "react";
// import RaisedButton from 'material-ui/RaisedButton';

import { TextField } from 'material-ui';
import { Signup } from "../utils/helper";
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            matchValue: 'cmad'
        }
    }
    onInputChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    gotoAboutPage() {
        if (this.state.value === this.state.matchValue) {
            this.props.history.push("/about")
        }
        else {
            alert("Wrong")
        }
    }

    sendToServer() {
        Signup(this.state.value)
            .then((response) => {
                // const responseseuucss = response;
                console.log(response)
                this.gotoAboutPage()
                //  response.json();
            })
            .catch(function (error) {
                console.log('fetch Erro Sign up: ' + error);
                // error.errors = true;
                // return error;
            });
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <TextField floatingLabelText="Floating Label Text" onChange={this.onInputChange.bind(this)} />
                {/* <input type="text" onChange={this.onInputChange.bind(this)} /> */}
                <button onClick={this.sendToServer.bind(this)} label="Send to sever" >Send to sever</button>
            </div>
        )
    }
}