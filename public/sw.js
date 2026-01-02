// Service Worker for caching and performance optimization
const CACHE_NAME = 'vijay-digital-v1';
const STATIC_CACHE = 'vijay-digital-static-v1';
const DYNAMIC_CACHE = 'vijay-digital-dynamic-v1';

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/src/index.css',
  '/favicon.ico',
  // Cache critical fonts
  'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip Chrome extension requests
  if (url.protocol === 'chrome-extension:') return;

  // Handle different types of requests
  if (url.origin === location.origin) {
    // Same-origin requests
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((response) => {
          // Don't cache non-successful responses
          if (!response.ok) return response;

          // Cache successful responses
          const responseToCache = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });

          return response;
        });
      })
    );
  } else {
    // External requests - cache images and fonts
    if (url.hostname === 'images.unsplash.com' ||
        url.hostname === 'fonts.gstatic.com' ||
        url.hostname === 'fonts.googleapis.com') {
      event.respondWith(
        caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(request).then((response) => {
            if (response.ok) {
              const responseToCache = response.clone();
              caches.open(DYNAMIC_CACHE).then((cache) => {
                cache.put(request, responseToCache);
              });
            }
            return response;
          });
        })
      );
    }
  }
});
