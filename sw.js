/* Service worker: la app funciona sin conexión.
   Sube VERSION cada vez que cambies archivos para que se actualice. */
const VERSION = 'v12';
const FILES = ['./', 'index.html', 'css/game.css', 'js/engine.js', 'js/config.js', 'js/cloud.js',
  'subjects/tecnologia.js', 'subjects/bioloxia.js', 'subjects/ingles.js', 'subjects/qa_tecnologia.js', 'subjects/qa_bioloxia.js',
  'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if(e.request.method !== 'GET' || u.origin !== location.origin || u.pathname.startsWith('/callback') || u.pathname.startsWith('/api/')) return;   // Google y fuentes van directos
  // Primero la red (para tener siempre lo último) y, sin conexión, la copia guardada
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(VERSION).then(ca => ca.put(e.request, c)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});
