app.directive("todo", function() {
    return {
      restrict: "E",
      templateUrl: "app/js/directives/task-template.html",
      scope: {
        title: '=task'
      },
      link: function($scope, elem, attrs) {
        $scope.delete_todo = function(todo) {
          console.log(todo);
          deleteTodo(todo);
          console.log(attrs) ;
          $scope.$emit('removeTask') ;
          //$scope.$emit('editTask') ;
        }
      },
      controller: function($scope) {
        $scope.isEditable = false ;
        $scope.editable = function(){$scope.isEditable = !$scope.isEditable}
      }

    };
  });