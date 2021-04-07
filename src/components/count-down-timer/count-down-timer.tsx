import React, { Component } from 'react'
import'./count-down-timer.css'

interface CountdownTimerState {
    currentTime: number;
}

export class CountdownTimer extends Component<{},CountdownTimerState> {
    state = {
        currentTime: 10
    };
    intervalId?: number;
    handleStart = () => {
        this.intervalId = window.setInterval(()=>{
            this.setState({
                currentTime: this.state.currentTime -1
            });
        },1000);
    };
    handleStop = () => {
        if(this.intervalId){
            clearInterval(this.intervalId)
        }
        return;
    }
    render() {
        const {currentTime} = this.state;
        return (
            <div>
                <h3>Countdown timer</h3>
                <div>
                    <button onClick={this.handleStart}>Start</button>
                    <button onClick={this.handleStop}>Stop</button>
                    <p id="currentTime">{currentTime}</p>
                </div>
            </div>
        )
    }
}
