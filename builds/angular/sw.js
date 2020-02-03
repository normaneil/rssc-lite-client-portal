var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/components.js',
  '/js/controllers.js',
  '/js/directives.js',
  '/js/MainController.js',
  '/images/icons-152.png',
  '/images/icons-192.png',
  '/images/icons-512.png',
  '/components/asideMenu.html',
  '/components/headerMenu.html',
  '/components/logo.html',
  '/components/subHeader.html',
  '/metronic/css/font.css',
  '/metronic/css/style.bundle.css',
  '/metronic/images/favicon.ico',
  '/metronic/images/bg-pattern-7.png',
  '/metronic/images/logo.png',
  '/metronic/images/rs_logo.png',
  '/metronic/js/pages/dashboard.js',
  '/metronic/js/scripts.bundle.js',
  '/metronic/plugins/global/plugins.bundle.css',
  '/metronic/plugins/global/plugins.bundle.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});