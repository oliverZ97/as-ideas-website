import React from "react"

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const rawSmoothScrollScript = require('!raw-loader!smooth-scroll/dist/smooth-scroll.polyfills.min.js');

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{__html: stylesStr}}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
      <head>
        <title>OIL.js - Consent Management</title>

        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <meta property="og:url" content="https://www.oiljs.org"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="oil.js - Open Source Opt-In Layer"/>
        <meta property="og:description" content="oil.js is a lightweight consent manager and cookie banner. It is optimized for low latency and performance. It aims to be easy to customize, simple and user-friendly. It supports the IAB framework to forward the consent to ad providers."/>
        <meta property="og:image" content="https://www.oiljs.org/cover.png"/>
        <meta name="keywords" content="oiljs,oil,gdpr,cookie-banner,dsgvo,iab,cmp,opt-ins,opt-in,consent-management,consentcookie,consent-handling,consent,eprivacy,Axel Springer,Ideas Engineering,Axel Springer Ideas Engineering,Innovation,Software,Development,Product"/>
        <meta name="author" content="Axel Springer Ideas Engineering GmbH"/>

        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `${rawSmoothScrollScript}`}}/>

        {this.props.headComponents}
        {css}
      </head>
      <body {...this.props.bodyAttributes}>
      {this.props.preBodyComponents}

      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{__html: this.props.body}}
      />

      {this.props.postBodyComponents}

      <noscript id="deferred-styles">
        <link rel="stylesheet" type="text/css" href="//use.fontawesome.com/releases/v5.1.1/css/all.css"/>
      </noscript>
      </body>
      </html>
    )
  }
};
