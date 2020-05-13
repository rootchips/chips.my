workbox.core.setCacheNameDetails({
  prefix: "my.site.tld",
  suffix: "v1",
  precache: "precache",
  runtime: "runtime-cache"
});

// let Workbox handle our precache list
// NOTE: This will be populated by jekyll-workbox-plugin.
workbox.precaching.precacheAndRoute([]);