import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import Example from './pages/Example'

function App() {
  return (
    <Router>
      {/* <Route path="/" component={LandingPage}></Route> */}
      <Route path="/" component={Example}></Route>
    </Router>
  );
}

export default App;
