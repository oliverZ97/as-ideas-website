import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";

import "sanitize.css";
import "./App.css";


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component= {Home} />
      <Route path="/contact" component={Contact} />
      <Route component={Home} />
    </Switch>
  </Router>
);


export default App;
