/**
 * HINT: gatsby-browser.js is loaded at the root of your site
 */


import 'normalize.css';
import './src/layout/App.scss';


export function onRouteUpdate() {
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

export function onClientEntry() {
  // enableSmoothScolling();
  // loadDeferedStyles();
};
