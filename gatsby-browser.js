/**
 * HINT: gatsby-browser.js is loaded at the root of your site
 */
import 'normalize.css';
import './src/templates/layout/App.scss';

import smoothscroll from 'smoothscroll-polyfill';

export function onRouteUpdate({location, action}) {
}

export function onClientEntry() {
  enableSmoothScolling();
}


function enableSmoothScolling() {
  smoothscroll.polyfill();
}
