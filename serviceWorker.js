const covidReport = "covid-report-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/app.css",
  "/js/app.js",
  "/js/framework7.bundle.min.css",
  "/f7-icon/css/framework7-icons.css",
  "/f7-icon/fonts/Framework7Icons-Regular.eot",
  "/f7-icon/fonts/Framework7Icons-Regular.ttf",
  "/f7-icon/fonts/Framework7Icons-Regular.woff",
  "/f7-icon/fonts/Framework7Icons-Regular.woff2",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(covidReport).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});