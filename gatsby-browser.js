/**
 * HINT: gatsby-browser.js is loaded at the root of your site
 */
import 'normalize.css';
import './src/templates/layout/App.scss';

import smoothscroll from 'smoothscroll-polyfill';

export function onRouteUpdate({location, action}) {
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
  enableSmoothScolling();
};


function enableSmoothScolling() {
  smoothscroll.polyfill();

  document.addEventListener("DOMContentLoaded", function (event) {
    var hash = window.location.hash;

    // do some scrolling if page was opened with hash-link
    if (hash) {
      window.setTimeout(
        function () {
          window.scrollTo(0, 0);
        }, 10);

      window.setTimeout(
        function () {
          var element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({
              top: -80,
              behavior: 'smooth'
            });
          }
        }, 800);
    }

    // // Find all Links an add smoothscrolling with a little offset
    // new SmoothScroll('a[href*="#"]', {
    //   offset: function (anchor, toggle) {
    //     return 50;
    //   },
    // });
  });
}

