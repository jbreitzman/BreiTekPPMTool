import React, { Component } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Dashboard/Header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
