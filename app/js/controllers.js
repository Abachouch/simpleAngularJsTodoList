app.controller('manageTodo', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = about();
    $scope.allTodo = getAllTodo().reverse();
    $scope.$on('removeTask' , function(){
      $scope.allTodo = getAllTodo().reverse();
    });
    
    $scope.saveTodo = function() {
      if(this.newTask) {
        addTodo($scope.newTask) ;
        console.log('adding : '+$scope.newTask) ;
        $scope.allTodo = getAllTodo().reverse();
      }
    };

    function hp(){
      console.log('hp') ;
    }
    
  });