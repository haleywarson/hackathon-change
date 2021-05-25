import React, { Component } from 'react'

import "./App.css";

import Form from "./Components/Form";
import Goals from "./Components/Goals";

class App extends Component {
  state = {
    goals: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          goals: data
        })
      );
  }

  render() {
    return (
      <div className="App">
        <h1>Form</h1>
        <Form goals={this.state.goals} />
        <h2>Goals</h2>
        <Goals goals={this.state.goals} />
      </div>
    );
  }
}

export default App;