import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./components/HomeView/Home";
import Imprint from "./components/Imprint/Imprint";
import BlogPost from "./components/BlogPostView";
import BlogSummary from "./components/BlogSummaryView";
import MainNavComponent from "./components/MainNav/MainNav";
import Footer from "./components/Footer/Footer";
import './App.scss';
import createHistory from "history/createBrowserHistory";
import Helmet from 'react-helmet/es/Helmet';
import JobsView from './components/JobsView/JobsView';
import JobDetailsView from './components/JobDetailsView/JobDetailsView';


let history = createHistory();

const App = () => (
  <Router history={history}>
    <article className='app'>
      <MainNavComponent history={history} />
      <Helmet>
        <title>ideas engineering ⚡</title>
        <meta property="og:url" content="http://axelspringerideas.de/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ideas engineering ⚡" />
        <meta property="og:description" content="We are a studio of developers, designers and product people. We focus on building software for the media industry. We combine technology and agile thinking to create great products people can’t help but love."
        />
        <meta property="og:image" content="http://axelspringerideas.de/cover.png" />
        <meta name="keywords" content="Axel Springer,Ideas Engineering,Axel Springer Ideas Engineering,Innovation,Software,Development,Product" />
        <meta name="author" content="Axel Springer Ideas Engineering" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog/:year/:month/:name" component={BlogPost} />
        <Route path="/blog" component={BlogSummary} />
        <Route path="/imprint" component={Imprint} />
        <Route path="/jobs/:jobId" component={JobDetailsView} />
        <Route path="/jobs" component={JobsView} />
        <Route component={Home} />
      </Switch>

      <Footer />
    </article>
  </Router>
);
export default App;