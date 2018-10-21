import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
class Counter extends Component {
    constructor() {
        super();
        this.state = {
            changedValue: 0
        }

    }
    valueChange(event) {
        this.setState({ changedValue: event.target.value })
    }

    updateClickedValue() {
        this.props.update(Number(this.state.changedValue));
    }
    decrementClickedValue() {
        this.props.update(-Number(this.state.changedValue));
    }
    render() {
        const MyAwesomeReactComponent = () => (
            <RaisedButton label="Default" />
            );
        return (
                MyAwesomeReactComponent()
                
        );
    }
}
export default Counter