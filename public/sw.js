// ------------------------------------------------------------------------------------------- Cached assets and version
const cacheName = 'v2.1';

const cacheAssets = [
	'css/global.css',
	'css/dashboard.css',
	'css/location.css',
	'css/main.css',
	'css/memories.css',
	'css/nav.css',
	'css/newNoteElement.css',
	'css/noteElement.css',
	'css/noteList.css',
	'css/settings.css',
	'css/sort.css',
	'css/userelement.css',
	'css/userList.css',
	'css/userSessions.css',
	'js/sw.js',
	'js/userList.js',
	'js/graphs.js',
	'/img/logo.png',
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