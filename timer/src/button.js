import React, { Component } from 'react';

class Button extends Component {


    startTimer(ev) {
        return this.props.startTimer(this.props.time)
    }

    render() {
        const element = (
            <button type="button" onClick={this.startTimer.bind(this)}>{this.props.time}</button>
        )

        return (
            element
        );
    }
}

export default Button;