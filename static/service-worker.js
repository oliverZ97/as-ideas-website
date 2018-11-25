(function () {
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

    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
  caches.keys().then(function (names) {
    for (let name of names)
      caches.delete(name);
  });
}())
