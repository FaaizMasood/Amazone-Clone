import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        {/* Switch is like if statements  page has header and body  */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* Route is like like from which route we are going to what page  */}
          <Route path="/">
            <Header />
            {/* Home page has header and body  */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
