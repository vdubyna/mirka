(function (define) {
  "use strict";

  define([
      "mirka/design/init"
    ],
    function (mirkaDesign) {
      mirkaDesign
        .directive('head', [
          '$rootScope',
          '$compile',
          '$design',
          function($rootScope, $compile, $design){
            return {
              restrict: 'E',
              link: function(scope, elem){
                scope.$design = $design;
                var html = '<link rel="stylesheet" data-ng-repeat="cssUrl in $design.getStylesheets()" ng-href="{{ cssUrl }}" />';
                elem.append($compile(html)(scope));

                $rootScope.$on('$routeChangeStart', function (e, next, current) {
                  if(current && current.$$route && current.$$route.css){
                    angular.forEach(current.$$route.css, function (sheet) {
                      $design.removeStylesheet(sheet)
                    });
                  }
                  if(next && next.$$route && next.$$route.css){
                    $design.addStylesheets(next.$$route.css);
                  }
                });
              }
            };
          }
        ]);
//        .directive('followBookmark', [
//          "$design",
//          "$location",
//          "$anchorScroll",
//          function($design, $location, $anchorScroll) {
//            return {
//              restrict: 'A',
//              controller: function (scope, tElement, tAttrs) {
//                // @todo get properly id
//                $location.hash(id);
//                $anchorScroll();
//              }
//            };
//          }
//        ]);

    return mirkaDesign;
  });
})(window.define);