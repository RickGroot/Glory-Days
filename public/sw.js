// ------------------------------------------------------------------------------------------- Cached assets and version
const cacheName = 'v1';

const cacheAssets = [
	'css/index.css',
	'js/index-min.js',
	'/manifest.json',
	'/',
	'/offline',
];

// ------------------------------------------------------------------------------------------- Call Install Event
self.addEventListener('install', e => {

	e.waitUntil(
		caches
			.open(cacheName)
			.then(cache => {
				return cache.addAll(cacheAssets);
			})
			.then(() => self.skipWaiting())
			.catch(err => console.log(err))
	);
});

// ------------------------------------------------------------------------------------------- Call Activate Event
self.addEventListener('activate', e => {
	e.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cache => {
					if (cache !== cacheName) {
						return caches.delete(cache);
					}
				})
			);
		})
	);
});

// ------------------------------------------------------------------------------------------- Call Fetch event
self.addEventListener('fetch', e => {
	e.respondWith(
		caches
			.match(e.request)
			.then(response => {
				if (response) {
					return response;
				}

				return fetch(e.request);
			})
			.catch(() => caches.match('/offline'))
	);
});