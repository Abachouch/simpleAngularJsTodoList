
angular.module('todoApp').controller('todoCtrl' , function($scope){
    $scope.viewTitle = 'Todo List' ;
    $scope.isEditable = false ;
    $scope.isErrDuplicat = false;
    $scope.hideErrDuplica = function(){$scope.isErrDuplicat = false;}
    //
    $scope.allTodo = getAllTodo();

    //delete todo
    $scope.$on('removeTask' , function(){
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