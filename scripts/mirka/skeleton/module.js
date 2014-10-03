(function (define) {
  "use strict";

  define([
    "mirka/skeleton/controllers",
    "mirka/skeleton/directives"
  ],
    function (mirkaSkeleton) {

      // Allows to extend skeleton runBlocks
      mirkaSkeleton.bootstrap = function (projectModule) {
        angular.forEach(this._runBlocks, function (block) {
          projectModule.run(block);
        });
      };

      mirkaSkeleton.config([
          "$routeProvider",
          "$contentProvider",
          "$skeletonProvider",
          function ($routeProvider, $contentProvider, $skeletonProvider) {
            $contentProvider.setContent(angular.content);

            $routeProvider
              .when("/", {
                templateUrl: $skeletonProvider.getPageUrl('default.html'),
                controller: "mirkaSkeletonCtrl"
              })
          }])
        .run([
          "$rootScope",
          "$content",
          "$skeleton",
          "$log",
          function ($rootScope, $content, $skeleton, $log) {
            $rootScope.$content  = $content;
            $rootScope.$skeleton = $skeleton;
            $rootScope.$log      = $log;
          }
        ]);

      return mirkaSkeleton;
    });
})(window.define);