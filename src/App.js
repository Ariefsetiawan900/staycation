import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";
import Checkout from "./pages/Checkout";
import Example from "./pages/Example";

import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
