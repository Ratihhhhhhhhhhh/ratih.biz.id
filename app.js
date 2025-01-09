// Mendaftarkan Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js')
      .then(() => console.log('Service Worker Terdaftar'))
      .catch(err => console.error('Service Worker Gagal:', err));
  });
}
