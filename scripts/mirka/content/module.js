(function (define) {
  "use strict";

  define([
      "angular"
    ],
    function (angular) {
      angular.module.mirkaContent = angular.module("mirkaContent", [])
        .provider("$content", function () {
          var contentContainer;

          this.setContent = function (content) {
            contentContainer = content;
          };

          this.$get = function() {
            return {
              get: function (path) {
                if (angular.isUndefined(contentContainer)) {
                  throw "Content should be defined before usage";
                }
                if (angular.isUndefined(path)) {
                  return contentContainer;
                } else {
                  return [contentContainer || self]
                    .concat(path.split('.'))
                    .reduce(function(prev, curr) {
                      return prev[curr];
                    });
                }
              }
            };
          };
        });

      return angular.module.mirkaContent;
    }
  );
})(window.define);