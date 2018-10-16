import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));

(function () {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations()
      .then(function (registrations) {
        for (let registration of registrations) {
          registration.unregister()
        }
      })
  }
})();
