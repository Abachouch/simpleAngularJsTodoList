var app = angular.module('todoApp', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/pages/todo.html",
        controller : "todoCtrl"
    })
    .when("/simpleAngularJsTodoList/", {
        templateUrl : "app/pages/todo.html",
        controller : "todoCtrl"
    })
    .when("/done", {
        templateUrl : "app/pages/done.html",
        controller : "doneCtrl"
    })
    .when("/simpleAngularJsTodoList/done", {
        templateUrl : "app/pages/done.html",
        controller : "doneCtrl"
    })
    .when("/simpleAngularJsTodoList/pomodoro", {
        templateUrl : "app/pages/404.html",
        controller : "doneCtrl"
    })
    .when("/simpleAngularJsTodoList/statistics", {
        templateUrl : "app/pages/404.html",
        controller : "doneCtrl"
    })
    
});