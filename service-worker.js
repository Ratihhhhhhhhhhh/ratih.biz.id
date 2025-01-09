const CACHE_NAME = 'toko-sepatu-wanita-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/assets/images/shoe1.jpg',
  '/assets/images/shoe2.jpg',
  '/assets/images/shoe3.jpg',
  '/assets/images/shoe4.jpg',
  '/assets/images/shoe5.jpg',
  '/assets/images/shoe6.jpg',
  '/assets/images/shoe7.jpg',
  '/assets/images/shoe8.jpg',
  '/assets/images/shoe9.jpg',
  '/assets/images/shoe10.jpg',
  '/assets/images/icon-192x192.png',
  '/assets/images/icon-512x512.png'
];

// Menginstal Service Worker dan menyimpan file ke cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

// Mengaktifkan Service Worker dan menghapus cache lama
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Service Worker: Menghapus cache lama', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Menangani permintaan jaringan dengan cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Mengembalikan respons dari cache
          return cachedResponse;
        }

        // Jika tidak ada di cache, ambil dari jaringan
        return fetch(event.request);
      })
  );
});
