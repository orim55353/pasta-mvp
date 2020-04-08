import React from "react";
import "./App.css";

import Container from "./components/container/container.component";
import MENU_DATA from "./menu-data";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Container className="container" data={MENU_DATA}></Container>
      </div>
    );
  }
}

export default App;
