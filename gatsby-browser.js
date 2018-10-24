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
}

// Called when the Gatsby browser runtime first starts.
export function onClientEntry() {
  enableSmoothScolling();
  initGoogleTag();
  initFacebook();
  removeServiceWorker();
}

function initGoogleTag() {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', 'UA-124834155-1', {'anonymize_ip': true});
}

// FACEBOOK SDK FOR BETTER SOCIAL SHARING PREVIEW
function initFacebook() {
  window.fbAsyncInit = function () {
    FB.init({
      appId: '477861676025726',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v3.1'
    });
    window.FB = FB;
  };
}

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function removeServiceWorker() {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations()
      .then(function (registrations) {
        for (let registration of registrations) {
          registration.unregister()
        }
      })
      .catch(function (error) {
        console.error(error);
      })
  }
}

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

