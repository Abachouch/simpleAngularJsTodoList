app.directive("todo", function() {
  
    return {
      restrict: "E",
      templateUrl: "app/directives/taskTemplate.html",
      scope: {
        title: '=task' ,
        type: '=type'
      },
      link: function($scope, elem, attrs) {
        $scope.delete_todo = function(todo) {
          console.log(todo);
          deleteTodo(todo);
          console.log(attrs) ;
          $scope.$emit('removeTask') ;
        }
      },
      controller: function($scope) {
        
        $scope.oldTitle ;
        $scope.isReadonly = true ;
        $scope.isErrDuplicat = false; // TODO turn it to false as default.

        $scope.edit= function(){
        
           $scope.isReadonly = updateTodo($scope.oldTitle , $scope.title) ;
           $scope.isErrDuplicat =  !$scope.isReadonly ;
        }

        $scope.editable = function(title){
          $scope.isReadonly = !$scope.isReadonly ;
          //hide error text when exiting edit mode .
          if($scope.isReadonly) $scope.isErrDuplicat =false ;
          $scope.oldTitle = angular.copy( title) ;
          
          console.log('function editable 31 --> init oldText :'+$scope.oldTitle) ;
          console.log('function editable 32 ---> title  : '+ title) ;
        }
      }
    };
  });
