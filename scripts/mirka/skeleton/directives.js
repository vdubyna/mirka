(function (define) {
  "use strict";

  define(["mirka/skeleton/init"], function (mirkaSkeleton) {
    mirkaSkeleton
      .directive('block', [
        "$skeleton",
        function($skeleton) {
          return {
            restrict: 'E',
            templateUrl: function (tElement, tAttrs) {
              return $skeleton.getBlockUrl(tAttrs.templateUrl);
            }
          };
        }]
      );

    return mirkaSkeleton;
  });
})(window.define);