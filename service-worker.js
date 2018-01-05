
var CACHE_NAME = 'ngSampleTodo';

//var urlsToCache = [
//  './',
//  'index.html',
//  //assets 
//  //////style
//  'app/assets/style/main.css',
//  //////icons
//  'app/assets/svg/ic_done.svg',
//  'app/assets/svg/ic_edit.svg',
//  'app/assets/svg/ic_menu.svg',
//  'app/assets/svg/ic_play.svg',
//  'app/assets/svg/ic_pomodoro.svg',
//  'app/assets/svg/ic_refresh.svg',
//  'app/assets/svg/ic_statistics.svg',
//  'app/assets/svg/ic_todo.svg',
//  'app/assets/icon.png',
//  //////angular libs
//  'app/assets/js/angular.min.js' ,
//  //views
//  'app/views/todo/todo.html',
//  'app/views/todo/todoController.js',
//  'app/views/todo/done.html',
//  'app/views/todo/doneController.js',
//  //directives
//  'app/directives/task-directive.js',
//  'app/directives/task-template.html',
//  //dataBase
//  'app/db/CRUD-localStorage.js',
//  //app
//  'app/app.js',
//  'app/controller.js',
//  //manifest
//  'ng.png',
//  'manifest.json',
//  'favicon.ico',
//  ////icons
//  
//];
var urlsToCache = [
  './',
  'index.html',
  'app/assets/style/main.css',
  'app/assets/svg/ic_done.svg',
  'app/assets/svg/ic_edit.svg',
  'app/assets/svg/ic_menu.svg',
  'app/assets/svg/ic_play.svg',
  'app/assets/svg/ic_pomodoro.svg',
  'app/assets/svg/ic_refresh.svg',
  'app/assets/svg/ic_statistics.svg',
  'app/assets/svg/ic_todo.svg',
  'app/assets/icon.png',
  'app/assets/js/angular.min.js' ,
  'app/views/todo/todo.html',
  'app/views/todo/todoController.js',
  'app/views/todo/done.html',
  'app/views/todo/doneController.js',
  'app/directives/task-directive.js',
  'app/directives/task-template.html',
  'app/db/CRUD-localStorage.js',
  'app/app.js',
  'app/controller.js',
  'ng.png',
  'manifest.json',
  'favicon.ico'
  
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
