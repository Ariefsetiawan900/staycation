import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Route path="/" component={LandingPage}></Route>
    </Router>
  );
}

export default App;
