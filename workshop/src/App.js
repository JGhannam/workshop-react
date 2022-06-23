import React, { Component } from "react";
import "./App.css";
import Enemy from "./components/enemy";

class App extends Component {
  state = {
    enemycount: [
      {
        number: 1,
      },
      {
        number: 2,
      },
      {
        number: 3,
      },
      {
        number: 4,
      },
    ]
  };


  render() {
    return (
    this.state.enemycount.map(enemy => (
      <Enemy key={enemy.number} number={enemy.number} />
    ))
    );
  }
}

export default App;