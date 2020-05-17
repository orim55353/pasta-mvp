import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import OrderView from "./components/order-view/order-view.component";
import Container from "./components/container/container.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Container} />
          <Route path="/order" component={OrderView} />
        </Switch>
      </div>
    );
  }
}

export default App;
