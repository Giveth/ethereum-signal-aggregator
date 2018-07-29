import React, { Component } from "react"

export default class App extends Component {
  static async getInitialProps({ query }) {
    return query
  }

  state = {
    hello: "world",
  }

  render() {
    const { hello } = this.state

    return <div>{hello}</div>
  }
}
