
var CACHE_NAME = 'ngSampleTodo';
var urlsToCache = [
  'https://abachouch.github.io/simpleAngularJsTodoList/' ,
  './',
  'index.html',
  '/app/style/style.css',
  'app/js/angular.min.js' ,
  'app/js/directives/task-directive.js',
  'app/js/directives/task-template.html',
  'app/js/CRUD-localStorage.js',
  'app/js/modules.js',
  'app/js/controllers.js',
  'ng.png',
  'manifest.json',
  'favicon.ico',
  
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


//

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log('test respons 41 :: '+JSON.stringify(response));
          return response;
        }
        console.log('ftestresponse false 44');
        return fetch(event.request);
      }
    )
  );
});

//

/********** old code ************/
