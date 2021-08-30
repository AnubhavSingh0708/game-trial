self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pwa-trial').then((cache) => cache.addAll([
      'game-trial/pwa/',
      'game-trial/pwa/index.html',
      'game-trial/pwa/index.js',
      'game-trial/pwa/style.css',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
