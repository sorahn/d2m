import React, { Component } from "react";

import weapons from "./weapons.json";
import InventoryRow from "./components/InventoryRow";
import ApplicationContainer from "./primatives/ApplicationContainer";

class App extends Component {
  render() {
    return (
      <ApplicationContainer>
        <InventoryRow title="Kinetic Weapons" items={weapons} />

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </ApplicationContainer>
    );
  }
}

export default App;
