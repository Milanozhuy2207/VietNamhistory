const CACHE_NAME = 'hao-khi-su-viet-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/bando.html',
  '/danhnhan.html',
  '/quiz.html',
  '/trieudai.html',
  '/css/global.css',
  '/css/home.css',
  '/css/bando.css',
  '/css/danhnhan.css',
  '/css/quiz.css',
  '/css/trieudai.css',
  '/js/global.js',
  '/js/components.js',
  '/js/home.js',
  '/js/bando.js',
  '/js/danhnhan.js',
  '/js/quiz.js',
  '/js/trieudai.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
