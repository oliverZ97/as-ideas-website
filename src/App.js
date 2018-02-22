import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import Home from "./components/HomeView/Home";
import BlogPost from "./components/BlogPostView";
import BlogSummary from "./components/BlogSummaryView";
import history from "./components/MainNav/history";
import MainNavComponent from "./components/MainNav/MainNav";
import Footer from "./components/Footer";
import './App.scss';

const App = () => (
  <Router history={history}>
    <div>
      <MainNavComponent/>


      <Switch>
        <Route exact path="/" component={Home}/>
        {/*<Route path="/imprint" component={Impressum}/>*/}
        <Route path="/blog/:year/:month/:name" component={BlogPost}/>
        <Route path="/blog" component={BlogSummary}/>
        <Route component={Home}/>
      </Switch>

      <Footer/>
    </div>
  </Router>
);
export default App;