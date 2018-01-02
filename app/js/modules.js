var app = angular.module('todoApp', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/pages/todo.html",
        controller : "todoCtrl"
    })
    .when("/done", {
        templateUrl : "app/pages/done.html",
        controller : "doneCtrl"
    })
    
});