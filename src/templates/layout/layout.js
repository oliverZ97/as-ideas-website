import React from "react"
import MainNav from "./MainNav/MainNav";
import Footer from "./Footer/Footer";
import Helmet from "react-helmet/es/Helmet";

export default ({children}) => (
  <article className='app'>
    <Helmet>
      <title>ideas engineering ⚡</title>
      <meta property="og:url" content="http://axelspringerideas.de/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="ideas engineering ⚡"/>
      <meta property="og:description" content="We are a studio of developers, designers and product people. We focus on building software for the media industry. We combine technology and agile thinking to create great products people can’t help but love."
      />
      <meta property="og:image" content="https://axelspringerideas.de/cover.png"/>
      <meta name="keywords" content="Axel Springer,Ideas Engineering,Axel Springer Ideas Engineering,Innovation,Software,Development,Product"/>
      <meta name="author" content="Axel Springer Ideas Engineering"/>
    </Helmet>

    <MainNav/>
    {children}
    <Footer/>

  </article>
)
