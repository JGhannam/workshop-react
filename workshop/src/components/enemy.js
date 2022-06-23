import React, { Component } from "react";
import "./styling/enemy.css";

export default class Enemy extends Component {
  state = {
    counter: 100,
  };

  render() {
    return (
      <div>
        
        <div className={this.isDead() ? 'enemyKilled' : 'enemyNotKilled'}>
        <h1>Enemy {this.props.number}</h1> 
          
          <div>
            <span>enemy status: </span>
            <span>{this.isDead() ? 'Killed :) ' : 'LOL you lame'}</span>
              
          </div>
    
          <h1 className={this.state.counter < 0 ? 'underZero' : 'aboveZero'}>{this.state.counter}</h1>

          {/* <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
            className={"buttonAdd"}
          >
            +
          </button> */}

          <button
            onClick={() => this.setState({ counter: this.state.counter - 1 })}
            className="buttonMinus"
          >
            -
          </button>

          <button
            onClick={() => this.setState({ counter: this.state.counter - 10 })}
            className="buttonMinus"
          >
            -10
          </button>            

          <button className="buttonReset" onClick={() => this.setState({ counter: 100 })}>
            Reset
          </button>

        <div className="divDamage" onClick={ () => this.setState({ counter: this.state.counter - 100})}></div>
        </div>
      </div>
    );
  }

  addtoCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    this.isDead();
  };

  subtractFromCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
    this.isDead();
  };

  isDead = () => {
    if (this.state.counter < 0) {
      return true;
    } else {
      return false;
    }
  }
}
