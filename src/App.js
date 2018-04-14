import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./components/HomeView/Home";
import BlogPost from "./components/BlogPostView";
import BlogSummary from "./components/BlogSummaryView";
import MainNavComponent from "./components/MainNav/MainNav";
import Footer from "./components/Footer/Footer";
import './App.scss';
import createHistory from "history/createBrowserHistory";


let history = createHistory();

const App = () => (
  <Router history={history}>
    <article className='app'>
      <MainNavComponent history={history} />
      <Switch>
        <Route exact path="/" component={Home} />
        {/*<Route path="/imprint" component={Impressum}/>*/}
        <Route path="/blog/:year/:month/:name" component={BlogPost} />
        <Route path="/blog" component={BlogSummary} />
        <Route component={Home} />
      </Switch>

      <Footer />
    </article>
  </Router>
);
export default App;