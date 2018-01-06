app.directive("todo", function () {
  return {
    restrict: "E",
    templateUrl: "app/directives/taskTemplate.html",
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
        
        deleteTodo(todo);
        
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
        $scope.isEditable = updateTodo(oldTitle, titleHolder.innerHTML);
        if(updateTodo(oldTitle, titleHolder.innerHTML)){
          $scope.isEditable = false; 
          oldTitle = null ;
          $scope.isErrDuplicat = false ; 
        }
        else $scope.isErrDuplicat = true;
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