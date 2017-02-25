import React, { Component } from 'react';

class Stop extends Component {

    stopTimer(ev) {
        return this.props.stopTimer()
    }

    render() {
        const element = (
            <button type="button" onClick={this.stopTimer.bind(this)}>Stop</button>
        )

        return element;
    }
}

export default Stop;