/**
 * HINT: gatsby-browser.js is loaded at the root of your site
 */


import 'normalize.css';
import './src/layout/App.scss';


exports.onRouteUpdate = () => {
  // anchorate({
  //   scroller: function (element) {
  //     if (!element) {
  //       return false;
  //     }
  //     element.scrollIntoView({behavior: 'smooth', block: 'start'});
  //     return true;
  //   }
  // })
};

exports.onClientEntry = () => {
  // enableSmoothScolling();
  // loadDeferedStyles();
};

