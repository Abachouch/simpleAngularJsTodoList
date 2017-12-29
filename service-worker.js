importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('ngSampleTodo').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?homescreen=1',
       '/?homescreen=1',
       '/style/main.css',
       '/js/main.min.js',
       'ng.png'
     ]);
   })
 );
});
 
self.addEventListener('fetch', function(event) {

console.log(event.request.url);

});