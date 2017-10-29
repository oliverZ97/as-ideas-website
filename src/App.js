import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";

import "sanitize.css";

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route component={Home}/>
            </Switch>
        </Layout>
    </Router>
);
export default App;