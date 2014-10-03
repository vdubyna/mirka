(function (define) {
  "use strict";

  define(["mirka/skeleton/init"], function (mirkaSkeleton) {
    mirkaSkeleton
      .controller("mirkaSkeletonCtrl", [
        "$scope",
        "$content",
        function ($scope, $content) {
          return {};
        }
      ]);

    return mirkaSkeleton;
  });
})(window.define);