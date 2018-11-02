import React, { Component } from "react"; // eslint-disable-line no-unused-vars

export class Overview extends Component {
  constructor () {
    super()
    console.log("overview")
    this.state = {}
  }

  render () {
    console.log("hello")
    return (
      <h1> Overview </h1>
    )
  }
}