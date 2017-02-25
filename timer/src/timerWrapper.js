import React, { Component } from 'react';
import Timer from './timer';
import Button from './button';
import Stop from './stop';

class TimerWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { timeLeft: null, timer: null }
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }
    startTimer(timeLeft) {
        clearInterval(this.state.timer);
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) clearInterval(timer);
            this.setState({ timeLeft: timeLeft })
        }, 1000)
        return this.setState({ timeLeft: timeLeft, timer: timer })
    }
    stopTimer(){
        clearInterval(this.state.timer);
        return this.setState({ timeLeft: 0, timer: this.state.timer })        
    }
    render() {
        const element = (
            <div>
                <h2>Timer</h2>
                <div >
                    <Button time="5" startTimer={this.startTimer} />
                    <Button time="10" startTimer={this.startTimer} />
                    <Button time="15" startTimer={this.startTimer} />
                </div>
                <Stop stopTimer={this.stopTimer}/>                
                <Timer timeLeft={this.state.timeLeft} />
            </div>
        );

        return element;
    }
}

export default TimerWrapper;