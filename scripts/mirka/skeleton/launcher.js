(function (define) {
  "use strict";

  // Prevent auto bootstrap application
  window.name = "NG_DEFER_BOOTSTRAP!";

  define([
      "jquery",
      "angular",
      "yaml",
      "mirka/skeleton/module"
    ],
    function ($, angular, yaml) {

      return {
        runSkeletonApp: function (projectName, contentSource) {
          $.get(contentSource, function (data) {
            angular.content     = yaml.load(data);
            angular.projectName = projectName;

            var modules = Object.keys(angular.module);
            angular.resumeBootstrap(modules);
          });
        }
      }
  });
})(window.define);
