import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div style={{ width: "50%", marginLeft: "35%" }}>
        <h1>Life Damage</h1>
        <div style={{ color: "blue", padding: 20 }}>
          <h1 className={this.state.counter}>{this.state.counter}</h1>
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
              backgroundColor: "aqua",
              color: "blue",
              width: "0.5%",
              padding: 50,
              borderRadius: "50%",
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
