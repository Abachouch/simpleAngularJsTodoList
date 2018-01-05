app.directive("todo", function () {

  return {
    restrict: "E",
    templateUrl: "app/directives/taskTemplate.html",
    scope: {
      title: '=task',
      type: '=type'
    },
    link: function ($scope, elem, attrs) {
      $scope.delete_todo = function (todo) {
        console.log(todo);
        deleteTodo(todo);
        console.log(attrs);
        $scope.$emit('removeTask');
      }
    },
    controller: function ($scope) {
      $scope.isReadonly =true ;
      $scope.oldTitle;
      $scope.isErrDuplicat = false; // TODO turn it to false as default.

      $scope.toggleEditable = function (curentTitle) {

        $scope.isReadonly = !$scope.isReadonly;
        $scope.oldTitle = angular.copy(curentTitle);
      }

      $scope.edit = function () {
        console.log('old :' + $scope.oldTitle);
        //
        $scope.isReadonly = updateTodo($scope.oldTitle, $scope.title);
        console.trace("scope : "+$scope);
        //debugger ;
        console.log('new :' + $scope.title);
        $scope.isErrDuplicat = !$scope.isReadonly;
      }
    }
  };
});