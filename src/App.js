import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import Layout from "./Layout";
import Home from "./HomeView";
import BlogPost from "./BlogPostView";
import BlogSummary from "./BlogSummaryView";
import Impressum from "./ImpressumView";
import "sanitize.css";
import history from "./Layout/Header/history";

const App = () => (
    <Router history={history}>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/imprint" component={Impressum}/>
                <Route path="/blog/:year/:month/:name" component={BlogPost}/>
                <Route path="/blog" component={BlogSummary}/>
                <Route component={Home}/>
            </Switch>
        </Layout>
    </Router>
);
export default App;