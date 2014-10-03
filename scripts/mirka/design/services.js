(function (define) {
  "use strict";

  define([
      "mirka/design/init"
    ],
    function (mirkaDesign) {
      mirkaDesign
        .factory("$design", function () {
          var stylesheetsContainer = [];

          return {
            addStylesheets: function (stylesheets) {
              var inArray = function( elem, arr) {
                return ((arr == null ? -1 : arr.indexOf(elem)) >= 0);
              };

              angular.forEach(stylesheets, function (item) {
                if (!inArray(item, stylesheetsContainer)) {
                  stylesheetsContainer.push(item);
                }
              })
            },
            getStylesheets: function () {
              return stylesheetsContainer;
            },
            removeStylesheet: function (sheet) {
              angular.forEach(stylesheetsContainer, function (style, idx) {
                if (style === sheet) {
                  stylesheetsContainer.splice(idx, 1);
                }
              });
            }
          };
        });

    return mirkaDesign;
  });
})(window.define);