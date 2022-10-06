(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1665049833495;

	const files = [
		"/service-worker-index.html",
		"/favicon.png",
		"/global.css",
		"/logo-192.png",
		"/logo-512.png",
		"/manifest.json",
		"/vendor/bootstrap/bootstrap-grid.css",
		"/vendor/bootstrap/bootstrap-grid.css.map",
		"/vendor/bootstrap/bootstrap-grid.min.css",
		"/vendor/bootstrap/bootstrap-grid.min.css.map",
		"/vendor/bootstrap/bootstrap-grid.rtl.css",
		"/vendor/bootstrap/bootstrap-grid.rtl.css.map",
		"/vendor/bootstrap/bootstrap-grid.rtl.min.css",
		"/vendor/bootstrap/bootstrap-grid.rtl.min.css.map",
		"/vendor/bootstrap/bootstrap-reboot.css",
		"/vendor/bootstrap/bootstrap-reboot.css.map",
		"/vendor/bootstrap/bootstrap-reboot.min.css",
		"/vendor/bootstrap/bootstrap-reboot.min.css.map",
		"/vendor/bootstrap/bootstrap-reboot.rtl.css",
		"/vendor/bootstrap/bootstrap-reboot.rtl.css.map",
		"/vendor/bootstrap/bootstrap-reboot.rtl.min.css",
		"/vendor/bootstrap/bootstrap-reboot.rtl.min.css.map",
		"/vendor/bootstrap/bootstrap-utilities.css",
		"/vendor/bootstrap/bootstrap-utilities.css.map",
		"/vendor/bootstrap/bootstrap-utilities.min.css",
		"/vendor/bootstrap/bootstrap-utilities.min.css.map",
		"/vendor/bootstrap/bootstrap-utilities.rtl.css",
		"/vendor/bootstrap/bootstrap-utilities.rtl.css.map",
		"/vendor/bootstrap/bootstrap-utilities.rtl.min.css",
		"/vendor/bootstrap/bootstrap-utilities.rtl.min.css.map",
		"/vendor/bootstrap/bootstrap.bundle.js",
		"/vendor/bootstrap/bootstrap.bundle.js.map",
		"/vendor/bootstrap/bootstrap.bundle.min.js",
		"/vendor/bootstrap/bootstrap.bundle.min.js.map",
		"/vendor/bootstrap/bootstrap.css",
		"/vendor/bootstrap/bootstrap.css.map",
		"/vendor/bootstrap/bootstrap.esm.js",
		"/vendor/bootstrap/bootstrap.esm.js.map",
		"/vendor/bootstrap/bootstrap.esm.min.js",
		"/vendor/bootstrap/bootstrap.esm.min.js.map",
		"/vendor/bootstrap/bootstrap.js",
		"/vendor/bootstrap/bootstrap.js.map",
		"/vendor/bootstrap/bootstrap.min.css",
		"/vendor/bootstrap/bootstrap.min.css.map",
		"/vendor/bootstrap/bootstrap.min.js",
		"/vendor/bootstrap/bootstrap.min.js.map",
		"/vendor/bootstrap/bootstrap.rtl.css",
		"/vendor/bootstrap/bootstrap.rtl.css.map",
		"/vendor/bootstrap/bootstrap.rtl.min.css",
		"/vendor/bootstrap/bootstrap.rtl.min.css.map",
		"/vendor/bootstrap/css/bootstrap-grid.css",
		"/vendor/bootstrap/css/bootstrap-grid.css.map",
		"/vendor/bootstrap/css/bootstrap-grid.min.css",
		"/vendor/bootstrap/css/bootstrap-grid.min.css.map",
		"/vendor/bootstrap/css/bootstrap-grid.rtl.css",
		"/vendor/bootstrap/css/bootstrap-grid.rtl.css.map",
		"/vendor/bootstrap/css/bootstrap-grid.rtl.min.css",
		"/vendor/bootstrap/css/bootstrap-grid.rtl.min.css.map",
		"/vendor/bootstrap/css/bootstrap-reboot.css",
		"/vendor/bootstrap/css/bootstrap-reboot.css.map",
		"/vendor/bootstrap/css/bootstrap-reboot.min.css",
		"/vendor/bootstrap/css/bootstrap-reboot.min.css.map",
		"/vendor/bootstrap/css/bootstrap-reboot.rtl.css",
		"/vendor/bootstrap/css/bootstrap-reboot.rtl.css.map",
		"/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css",
		"/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css.map",
		"/vendor/bootstrap/css/bootstrap-utilities.css",
		"/vendor/bootstrap/css/bootstrap-utilities.css.map",
		"/vendor/bootstrap/css/bootstrap-utilities.min.css",
		"/vendor/bootstrap/css/bootstrap-utilities.min.css.map",
		"/vendor/bootstrap/css/bootstrap-utilities.rtl.css",
		"/vendor/bootstrap/css/bootstrap-utilities.rtl.css.map",
		"/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css",
		"/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css.map",
		"/vendor/bootstrap/css/bootstrap.css",
		"/vendor/bootstrap/css/bootstrap.css.map",
		"/vendor/bootstrap/css/bootstrap.min.css",
		"/vendor/bootstrap/css/bootstrap.min.css.map",
		"/vendor/bootstrap/css/bootstrap.rtl.css",
		"/vendor/bootstrap/css/bootstrap.rtl.css.map",
		"/vendor/bootstrap/css/bootstrap.rtl.min.css",
		"/vendor/bootstrap/css/bootstrap.rtl.min.css.map",
		"/vendor/bootstrap/jquery.js",
		"/vendor/bootstrap/jquery.min.js",
		"/vendor/bootstrap/jquery.min.map",
		"/vendor/bootstrap/jquery.slim.js",
		"/vendor/bootstrap/jquery.slim.min.js",
		"/vendor/bootstrap/jquery.slim.min.map",
		"/vendor/bootstrap/js/bootstrap.bundle.js",
		"/vendor/bootstrap/js/bootstrap.bundle.js.map",
		"/vendor/bootstrap/js/bootstrap.bundle.min.js",
		"/vendor/bootstrap/js/bootstrap.bundle.min.js.map",
		"/vendor/bootstrap/js/bootstrap.esm.js",
		"/vendor/bootstrap/js/bootstrap.esm.js.map",
		"/vendor/bootstrap/js/bootstrap.esm.min.js",
		"/vendor/bootstrap/js/bootstrap.esm.min.js.map",
		"/vendor/bootstrap/js/bootstrap.js",
		"/vendor/bootstrap/js/bootstrap.js.map",
		"/vendor/bootstrap/js/bootstrap.min.js",
		"/vendor/bootstrap/js/bootstrap.min.js.map"
	];

	const shell = [
		"/client/client.3c926c76.js",
		"/client/inject_styles.5607aec6.js",
		"/client/index.c1900330.js",
		"/client/register.177437ff.js",
		"/client/about.0443b2eb.js",
		"/client/index.cfff2d95.js",
		"/client/_slug_.0cb51984.js",
		"/client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const staticAssets = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});


	/**
	 * Fetch the asset from the network and store it in the cache. 
	 * Fall back to the cache if the user is offline.
	 */
	async function fetchAndCache(request) {
		const cache = await caches.open(`offline${timestamp}`);

		try {
			const response = await fetch(request);
			cache.put(request, response.clone());
			return response;
		} catch (err) {
			const response = await cache.match(request);
			if (response) return response;

			throw err;
		}
	}

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		const isHttp = url.protocol.startsWith('http');
		const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
		const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
		const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;

		if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
			event.respondWith(
				(async () => {
					// always serve static files and bundler-generated assets from cache.
					// if your application has other URLs with data that will never change,
					// set this variable to true for them and they will only be fetched once.
					const cachedAsset = isStaticAsset && await caches.match(event.request);

					// for pages, you might want to serve a shell `service-worker-index.html` file,
					// which Sapper has generated for you. It's not right for every
					// app, but if it's right for yours then uncomment this section
					/*
					if (!cachedAsset && url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
						return caches.match('/service-worker-index.html');
					}
					*/

					return cachedAsset || fetchAndCache(event.request);
				})()
			);
		}
	});

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTY2NTA0OTgzMzQ5NTtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcIi9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sXCIsXG5cdFwiL2Zhdmljb24ucG5nXCIsXG5cdFwiL2dsb2JhbC5jc3NcIixcblx0XCIvbG9nby0xOTIucG5nXCIsXG5cdFwiL2xvZ28tNTEyLnBuZ1wiLFxuXHRcIi9tYW5pZmVzdC5qc29uXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLWdyaWQuY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLWdyaWQuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC1ncmlkLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtZ3JpZC5taW4uY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC1ncmlkLnJ0bC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtZ3JpZC5ydGwuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC1ncmlkLnJ0bC5taW4uY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLWdyaWQucnRsLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXJlYm9vdC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtcmVib290LmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtcmVib290Lm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtcmVib290Lm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXJlYm9vdC5ydGwuY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXJlYm9vdC5ydGwuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC1yZWJvb3QucnRsLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtcmVib290LnJ0bC5taW4uY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC11dGlsaXRpZXMuY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXV0aWxpdGllcy5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXV0aWxpdGllcy5taW4uY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXV0aWxpdGllcy5taW4uY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC11dGlsaXRpZXMucnRsLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC11dGlsaXRpZXMucnRsLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtdXRpbGl0aWVzLnJ0bC5taW4uY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXV0aWxpdGllcy5ydGwubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAuYnVuZGxlLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLmJ1bmRsZS5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5lc20uanNcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAuZXNtLmpzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5lc20ubWluLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLmVzbS5taW4uanMubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLmpzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5taW4uY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLm1pbi5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5taW4uanMubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLnJ0bC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAucnRsLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAucnRsLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAucnRsLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1ncmlkLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtZ3JpZC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1ncmlkLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLWdyaWQubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLWdyaWQucnRsLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtZ3JpZC5ydGwuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtZ3JpZC5ydGwubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtZ3JpZC5ydGwubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXJlYm9vdC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXJlYm9vdC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1yZWJvb3QubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtcmVib290Lm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1yZWJvb3QucnRsLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtcmVib290LnJ0bC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1yZWJvb3QucnRsLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXJlYm9vdC5ydGwubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXV0aWxpdGllcy5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXV0aWxpdGllcy5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC11dGlsaXRpZXMubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtdXRpbGl0aWVzLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC11dGlsaXRpZXMucnRsLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtdXRpbGl0aWVzLnJ0bC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC11dGlsaXRpZXMucnRsLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXV0aWxpdGllcy5ydGwubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLnJ0bC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLnJ0bC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5ydGwubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAucnRsLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanF1ZXJ5LmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanF1ZXJ5Lm1pbi5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pxdWVyeS5taW4ubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanF1ZXJ5LnNsaW0uanNcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcXVlcnkuc2xpbS5taW4uanNcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcXVlcnkuc2xpbS5taW4ubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLmJ1bmRsZS5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5idW5kbGUuanMubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAuZXNtLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLmVzbS5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAuZXNtLm1pbi5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5lc20ubWluLmpzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAubWluLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLm1pbi5qcy5tYXBcIlxuXTtcbmV4cG9ydCB7IGZpbGVzIGFzIGFzc2V0cyB9OyAvLyBsZWdhY3lcblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gW1xuXHRcIi9jbGllbnQvY2xpZW50LjNjOTI2Yzc2LmpzXCIsXG5cdFwiL2NsaWVudC9pbmplY3Rfc3R5bGVzLjU2MDdhZWM2LmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC5jMTkwMDMzMC5qc1wiLFxuXHRcIi9jbGllbnQvcmVnaXN0ZXIuMTc3NDM3ZmYuanNcIixcblx0XCIvY2xpZW50L2Fib3V0LjA0NDNiMmViLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC5jZmZmMmQ5NS5qc1wiLFxuXHRcIi9jbGllbnQvX3NsdWdfLjBjYjUxOTg0LmpzXCIsXG5cdFwiL2NsaWVudC9zYXBwZXItZGV2LWNsaWVudC4xZTdhNGE1ZS5qc1wiXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdHRlcm46IC9eXFwvJC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3JlZ2lzdGVyXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9hYm91dFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYmxvZ1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYmxvZ1xcLyhbXi9dKz8pXFwvPyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwgfSBmcm9tICdAc2FwcGVyL3NlcnZpY2Utd29ya2VyJztcblxuY29uc3QgQVNTRVRTID0gYGNhY2hlJHt0aW1lc3RhbXB9YDtcblxuLy8gYHNoZWxsYCBpcyBhbiBhcnJheSBvZiBhbGwgdGhlIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgYnVuZGxlcixcbi8vIGBmaWxlc2AgaXMgYW4gYXJyYXkgb2YgZXZlcnl0aGluZyBpbiB0aGUgYHN0YXRpY2AgZGlyZWN0b3J5XG5jb25zdCB0b19jYWNoZSA9IHNoZWxsLmNvbmNhdChmaWxlcyk7XG5jb25zdCBzdGF0aWNBc3NldHMgPSBuZXcgU2V0KHRvX2NhY2hlKTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZXZlbnQgPT4ge1xuXHRldmVudC53YWl0VW50aWwoXG5cdFx0Y2FjaGVzXG5cdFx0XHQub3BlbihBU1NFVFMpXG5cdFx0XHQudGhlbihjYWNoZSA9PiBjYWNoZS5hZGRBbGwodG9fY2FjaGUpKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRzZWxmLnNraXBXYWl0aW5nKCk7XG5cdFx0XHR9KVxuXHQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXMua2V5cygpLnRoZW4oYXN5bmMga2V5cyA9PiB7XG5cdFx0XHQvLyBkZWxldGUgb2xkIGNhY2hlc1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuXHRcdFx0XHRpZiAoa2V5ICE9PSBBU1NFVFMpIGF3YWl0IGNhY2hlcy5kZWxldGUoa2V5KTtcblx0XHRcdH1cblxuXHRcdFx0c2VsZi5jbGllbnRzLmNsYWltKCk7XG5cdFx0fSlcblx0KTtcbn0pO1xuXG5cbi8qKlxuICogRmV0Y2ggdGhlIGFzc2V0IGZyb20gdGhlIG5ldHdvcmsgYW5kIHN0b3JlIGl0IGluIHRoZSBjYWNoZS4gXG4gKiBGYWxsIGJhY2sgdG8gdGhlIGNhY2hlIGlmIHRoZSB1c2VyIGlzIG9mZmxpbmUuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kQ2FjaGUocmVxdWVzdCkge1xuXHRjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKGBvZmZsaW5lJHt0aW1lc3RhbXB9YClcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG5cdFx0Y2FjaGUucHV0KHJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xuXHRcdHJldHVybiByZXNwb25zZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZS5tYXRjaChyZXF1ZXN0KTtcblx0XHRpZiAocmVzcG9uc2UpIHJldHVybiByZXNwb25zZTtcblxuXHRcdHRocm93IGVycjtcblx0fVxufVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZXZlbnQgPT4ge1xuXHRpZiAoZXZlbnQucmVxdWVzdC5tZXRob2QgIT09ICdHRVQnIHx8IGV2ZW50LnJlcXVlc3QuaGVhZGVycy5oYXMoJ3JhbmdlJykpIHJldHVybjtcblxuXHRjb25zdCB1cmwgPSBuZXcgVVJMKGV2ZW50LnJlcXVlc3QudXJsKTtcblxuXHQvLyBkb24ndCB0cnkgdG8gaGFuZGxlIGUuZy4gZGF0YTogVVJJc1xuXHRjb25zdCBpc0h0dHAgPSB1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpO1xuXHRjb25zdCBpc0RldlNlcnZlclJlcXVlc3QgPSB1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiYgdXJsLnBvcnQgIT09IHNlbGYubG9jYXRpb24ucG9ydDtcblx0Y29uc3QgaXNTdGF0aWNBc3NldCA9IHVybC5ob3N0ID09PSBzZWxmLmxvY2F0aW9uLmhvc3QgJiYgc3RhdGljQXNzZXRzLmhhcyh1cmwucGF0aG5hbWUpO1xuXHRjb25zdCBza2lwQmVjYXVzZVVuY2FjaGVkID0gZXZlbnQucmVxdWVzdC5jYWNoZSA9PT0gJ29ubHktaWYtY2FjaGVkJyAmJiAhaXNTdGF0aWNBc3NldDtcblxuXHRpZiAoaXNIdHRwICYmICFpc0RldlNlcnZlclJlcXVlc3QgJiYgIXNraXBCZWNhdXNlVW5jYWNoZWQpIHtcblx0XHRldmVudC5yZXNwb25kV2l0aChcblx0XHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdC8vIGFsd2F5cyBzZXJ2ZSBzdGF0aWMgZmlsZXMgYW5kIGJ1bmRsZXItZ2VuZXJhdGVkIGFzc2V0cyBmcm9tIGNhY2hlLlxuXHRcdFx0XHQvLyBpZiB5b3VyIGFwcGxpY2F0aW9uIGhhcyBvdGhlciBVUkxzIHdpdGggZGF0YSB0aGF0IHdpbGwgbmV2ZXIgY2hhbmdlLFxuXHRcdFx0XHQvLyBzZXQgdGhpcyB2YXJpYWJsZSB0byB0cnVlIGZvciB0aGVtIGFuZCB0aGV5IHdpbGwgb25seSBiZSBmZXRjaGVkIG9uY2UuXG5cdFx0XHRcdGNvbnN0IGNhY2hlZEFzc2V0ID0gaXNTdGF0aWNBc3NldCAmJiBhd2FpdCBjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCk7XG5cblx0XHRcdFx0Ly8gZm9yIHBhZ2VzLCB5b3UgbWlnaHQgd2FudCB0byBzZXJ2ZSBhIHNoZWxsIGBzZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sYCBmaWxlLFxuXHRcdFx0XHQvLyB3aGljaCBTYXBwZXIgaGFzIGdlbmVyYXRlZCBmb3IgeW91LiBJdCdzIG5vdCByaWdodCBmb3IgZXZlcnlcblx0XHRcdFx0Ly8gYXBwLCBidXQgaWYgaXQncyByaWdodCBmb3IgeW91cnMgdGhlbiB1bmNvbW1lbnQgdGhpcyBzZWN0aW9uXG5cdFx0XHRcdC8qXG5cdFx0XHRcdGlmICghY2FjaGVkQXNzZXQgJiYgdXJsLm9yaWdpbiA9PT0gc2VsZi5vcmlnaW4gJiYgcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0dGVybi50ZXN0KHVybC5wYXRobmFtZSkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNhY2hlcy5tYXRjaCgnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQqL1xuXG5cdFx0XHRcdHJldHVybiBjYWNoZWRBc3NldCB8fCBmZXRjaEFuZENhY2hlKGV2ZW50LnJlcXVlc3QpO1xuXHRcdFx0fSkoKVxuXHRcdCk7XG5cdH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztDQUFBO0NBQ08sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQ3ZDO0NBQ08sTUFBTSxLQUFLLEdBQUc7Q0FDckIsQ0FBQyw0QkFBNEI7Q0FDN0IsQ0FBQyxjQUFjO0NBQ2YsQ0FBQyxhQUFhO0NBQ2QsQ0FBQyxlQUFlO0NBQ2hCLENBQUMsZUFBZTtDQUNoQixDQUFDLGdCQUFnQjtDQUNqQixDQUFDLHNDQUFzQztDQUN2QyxDQUFDLDBDQUEwQztDQUMzQyxDQUFDLDBDQUEwQztDQUMzQyxDQUFDLDhDQUE4QztDQUMvQyxDQUFDLDBDQUEwQztDQUMzQyxDQUFDLDhDQUE4QztDQUMvQyxDQUFDLDhDQUE4QztDQUMvQyxDQUFDLGtEQUFrRDtDQUNuRCxDQUFD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
