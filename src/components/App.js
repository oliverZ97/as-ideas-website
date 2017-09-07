import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "sanitize.css";
import "./App.css";


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component= {Home} />
      <Route path="/contact" component={Contact} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);


const Home = () => (
  <div>
    Hello World
  </div>
);


const Contact = () => (
  <div>
    Contact
  </div>
);


const NoMatch = ({ location }) => (
  <div>
    404: {location.pathname}
  </div>
);


export default App;
