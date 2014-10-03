(function (define) {
  "use strict";

  define([
    "mirka/skeleton/module"
  ],
    function (skeletonModule) {
      var portfolio = angular.module("portfolio", ['mirkaSkeleton']);

      skeletonModule.bootstrap(portfolio);

      portfolio.run([
        "$rootScope",
        "$design",
        function ($rootScope, $design) {
          $design.addStylesheets([
            'scripts/portfolio/themes/default/css/vendor.css',
            'scripts/portfolio/themes/default/css/app.css'
          ]);
        }
      ]);

      return portfolio;
    });
})(window.define);