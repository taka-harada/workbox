/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "precache-manifest.7b55c1b141f1c9043c07e969741574ea.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "dd65a4df392a4ae621996308fc43a4d1"
  },
  {
    "url": "precache-manifest.00577434ef7a9e94029f8e02654fb82c.js",
    "revision": "00577434ef7a9e94029f8e02654fb82c"
  },
  {
    "url": "precache-manifest.00640c306de49d407ab2e8bc1c8f3bb8.js",
    "revision": "00640c306de49d407ab2e8bc1c8f3bb8"
  },
  {
    "url": "precache-manifest.e5e6c192025b7b8c71c2c820bd4cd114.js",
    "revision": "e5e6c192025b7b8c71c2c820bd4cd114"
  },
  {
    "url": "sw.js",
    "revision": "b03611970f0e2c8dac687573b2ee0720"
  },
  {
    "url": "images/eyecatch.png",
    "revision": "90196b4fd6f4f44a7d24d423263cf234"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/bst-cdn-image\.s3-ap-northeast-1\.amazonaws\.com.*$/, new workbox.strategies.CacheFirst({ "cacheName":"cdn-s3", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, maxAgeSeconds: 864000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
