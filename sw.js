// Service worker de BL3D: permite usar la app sin conexión.
// Si publicás cambios en index.html, subí el número de versión para que se actualice.
const VERSION = 'bl3d-v1';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];
const EXTERNAL = ['https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    await cache.addAll(CORE);
    await Promise.all(EXTERNAL.map((u) => fetch(u, { mode: 'no-cors' }).then((r) => cache.put(u, r)).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || !/^https?:/.test(req.url)) return;
  event.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const hit = await cache.match(req, { ignoreSearch: true });
    const network = fetch(req).then((res) => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    }).catch(() => null);
    if (hit) { try { event.waitUntil(network); } catch (e) {} return hit; }
    const res = await network;
    if (res) return res;
    if (req.mode === 'navigate') {
      const fallback = (await cache.match('index.html')) || (await cache.match('./'));
      if (fallback) return fallback;
    }
    return Response.error();
  })());
});
