angular.module('todoApp').config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/views/todo/todo.html",
            controller: "todoCtrl"
        })
        .when("/done", {
            templateUrl: "app/views/done/done.html",
            controller: "doneCtrl"
        })
        .when("/404", {
            templateUrl: "app/views/404.html"
        })
});