// Photo Bot service worker: app works offline after first visit; AI model & OpenCV cached.
const SHELL = 'photobot-shell-v5', RUNTIME = 'photobot-runtime-v1';
const SHELL_FILES = ['/', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(SHELL).then(c => c.addAll(SHELL_FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== SHELL && k !== RUNTIME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.pathname.startsWith('/api/')) return;
  // pages: network first so updates show up, cached copy when offline
  if (req.mode === 'navigate'){
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(SHELL).then(c => c.put('/', cp)); return r; }).catch(() => caches.match('/')));
    return;
  }
  // heavy, rarely-changing files (AI model, OpenCV, fonts, libraries): cache first
  const heavy = url.pathname.endsWith('.onnx') || /cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com|fonts\.(googleapis|gstatic)\.com/.test(url.host);
  if (heavy || url.origin === location.origin){
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r && (r.ok || r.type === 'opaque')){ const cp = r.clone(); caches.open(RUNTIME).then(c => c.put(req, cp)); }
      return r;
    })));
  }
});
