import { Component } from "react";
import "./App.css";
import Goals from "./Components.js/Goals";

class App extends Component() {

  state = {
    goals: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/goals")
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return (
      <div className="App">
        {/* <Form /> */}
        <Goals />
      </div>
    );
  }
}

export default App;

