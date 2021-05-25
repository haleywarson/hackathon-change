import React, { Component } from 'react'

import Form from "./Components/Form"
import Goals from "./Components/Goals"

export default class App extends Component {

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
        <Form />
        <Goals />
      </div>
    )
  }
}

