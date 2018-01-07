angular.module('todoApp')
.controller('doneCtrl' , function($scope){
    $scope.allDone = getAllDone();//delete todo
    $scope.$on('refresh' , function(){
      $scope.allDone = getAllDone();
    });
    
  });