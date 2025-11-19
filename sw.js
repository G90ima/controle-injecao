const CACHE = 'injetoras-v1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll([
    '/', '/injetoras-gilmar/', 'index.html', 'dashboard.html'
  ])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
