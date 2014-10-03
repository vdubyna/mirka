(function (define) {
  "use strict";

  define([
      "angular",
      "angular-route",

      "mirka/content/module",
      "mirka/design/module"
    ],
    function (angular) {
      angular.module.mirkaSkeleton = angular.module("mirkaSkeleton", [
          'ngRoute',
          'mirkaContent',
          'mirkaDesign'
        ])
        .provider("$skeleton", function () {

          var projectName = angular.projectName;

          this.getPageUrl = function (name) {
            return "scripts/"+projectName+"/views/pages/" + name;
          };

          this.$get = function() {
            return {
              getBlockUrl: function (name) {
                return "scripts/"+projectName+"/views/blocks/" + name;
              }
            };
          };
        });

      return angular.module.mirkaSkeleton;
    });

})(window.define);