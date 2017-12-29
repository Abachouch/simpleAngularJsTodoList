app.controller('manageTodo', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = about();
    $scope.allTodo = getAllTodo();
    $scope.$on('removeTask' , function(){
      $scope.allTodo = getAllTodo();
    })
    
    
    function hp(){
      console.log('hp') ;
    }
    
    
  });