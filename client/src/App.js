import React, { Component } from "react";

import "./components/layout";
import Layout from "./components/layout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Layout pageTitle="Home" pageHeading="Welcome">
          <p>Technical Challenge</p>
        </Layout>

        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
