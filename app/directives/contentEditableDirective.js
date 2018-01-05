angular.module('todoApp')
.directive('contenteditable', function() {

  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      // view -> model
      elm.on('blur', function() {
        ctrl.$setViewValue(elm.html());
      });

      // model -> view
      ctrl.$render = function() {
        elm.html(ctrl.$viewValue);
      };

      // load init value from DOM
      ctrl.$setViewValue(elm.html());
    }
  };
});

// directive('contenteditable', ['$sce', function($sce) {
//   return {
//     restrict: 'A', // only activate on element attribute
//     require: '?ngModel', // get a hold of NgModelController
//     link: function(scope, element, attrs, ngModel) {
//       if (!ngModel) return; // do nothing if no ng-model

//       // Specify how UI should be updated
//       ngModel.$render = function() {
//         element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
//       };
 
//       // Listen for change events to enable binding
//       element.on('blur keyup change', function() {
//         scope.$evalAsync(read);
//       });
//       read(); // initialize

//       // Write data to the model
//       function read() {
//         var html = element.html();
//         // When we clear the content editable the browser leaves a <br> behind
//         // If strip-br attribute is provided then we strip this out
//         if (attrs.stripBr && html === '<br>') {
//           html = '';
//         }
//         ngModel.$setViewValue(html);
//       }
//     }
//   };
// }]);
