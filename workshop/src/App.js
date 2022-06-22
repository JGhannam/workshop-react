import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>

        <h1>Life Damage</h1>

        <div>

          <h1 className={this.state.counter <= 0 ? 'underZero' : 'aboveZero'}>{this.state.counter}</h1>

          <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            +
          </button>

          <button
            onClick={() => this.setState({ counter: this.state.counter - 1 })}
          >
            -
          </button>

        </div>

        <div>
          
          <button
            style={{
              backgroundColor: this.state.counter <= 0 ? 'red' : 'green',
            }}
            onClick={() => this.setState({ counter: this.state.counter - 1 })}
          ></button>

        </div>
      </div>
    );
  }

  addtoCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  subtractFromCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
}
