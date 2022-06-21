import React, { Component } from 'react';

export default class App extends Component {
    state = {
        counter: 0,
    }
    
    render() {
        return (
            <div>
                
            <h1>{this.state.counter}</h1>

            <button onClick={() => this.setState({ counter: this.state.counter + 1 })}> 
                +
            </button> 

            <button onClick={() => this.setState({ counter: this.state.counter - 1 })}> 
                -
            </button>

            </div>
        );
    }

    addtoCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    subtractFromCounter = () => {
        this.setState({
            counter: this.state.counter - 1,
        });
    }
}
