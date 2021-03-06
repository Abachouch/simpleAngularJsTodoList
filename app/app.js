//import {crudLocalStorage} from './db/CRUD-localStorage' ;

require("./db/CRUD-localStorage");
import angular from 'angular' ;
import ngRoute from 'angular-route'

// Import our templates file (generated by Gulp)
import './app.templates';


//
var app = angular.module('todoApp', ["ngRoute" , "templates"])
.controller('manageTodo', function($scope) {
    $scope.appTitle = 'TODO' ;
      $scope.isHide = true ;       
  
    })
    .controller('doneCtrl' , function($scope){
        $scope.allDone = getAllDone();//delete todo
        $scope.$on('refresh' , function(){
          $scope.allDone = getAllDone();
        });
        
      })
      .controller('todoCtrl' , function($scope){
        $scope.isEditable = false ;
        $scope.isErrDuplicat = false;
        $scope.hideErrDuplica = function(){$scope.isErrDuplicat = false;}
        //
        $scope.allTodo = getAllTodo();
    
        //delete todo
        $scope.$on('refresh' , function(){
          $scope.allTodo = getAllTodo();
        });
        //save todo
        $scope.saveTodo = function() {
          if(this.newTask) {
            if(addTodo($scope.newTask)){
              console.log('adding : '+$scope.newTask) ;
              $scope.allTodo = getAllTodo();
              $scope.newTask ="" ;
              $scope.isErrDuplicat = false ;
            }
            else{
              $scope.isErrDuplicat = true ;
            }
          }
        };
      })
.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "todo.html",
            controller: "todoCtrl"
        })
        .when("/done", {
            templateUrl: "done.html",
            controller: "doneCtrl"
        })
        .when("/404", {
            templateUrl: "404.html"
        })
})
.directive("todo", function () {
    return {
      restrict: "E",
      templateUrl: "taskTemplate.html",
      scope: {
        title: '=task',
        type: '=type'
      },
      link: function ($scope, elem, attrs) {
        //Variables
        $scope.isEditable = false ;
        var titleHolder = elem[0].getElementsByClassName('title')[0];
        titleHolder.innerHTML = $scope.title; //set title to his holder.
        var oldTitle ; //initiat original title.
        $scope.isErrDuplicat = false;//hide error message in init stat.
  
        /**
         * delete todo from localstraage
         * @param {*todo} todo 
         */
        $scope.delete_todo = function (todo) {
          
          switch($scope.type){
            case 'todo' : deleteTodo(todo) ; break ;
            case 'done' : deleteDone(todo) ; break ;
          }
                  
          $scope.$emit('refresh');
        }
      
        /**
         * make the form editable
         */
        $scope.toggleEditable = function(){
          $scope.isEditable = !$scope.isEditable;
          if($scope.isEditable) //GC.
          oldTitle = titleHolder.innerHTML ;
          else oldTitle = null ;
        }
        /**
         * update todo in lcalstorage
         */
        $scope.edit = function(){
          
          if($scope.type ===  'todo'){
            if(updateTodo(oldTitle, titleHolder.innerHTML)){
              $scope.isEditable = false; 
              oldTitle = null ;
              $scope.isErrDuplicat = false ; 
            }
            else $scope.isErrDuplicat = true;
          }        
        }
  
        $scope.toggleTask = function(todo) {
          switch($scope.type){
            case 'todo' : markAsDone(todo); break ;
            case 'done' : markAsUndone(todo) ; break ;
          }
          $scope.$emit('refresh');
        }
  
      },
      controller: function ($scope) {
       
      }
    };
  });
