"use strict";

require(
  ["scripts/mirka/main"],
  function () {

    //@todo think about lancher---portfolio dependencies
    require([
      "mirka/skeleton/launcher",
      "portfolio/module"
    ],
      function (mirkaLauncher) {
        mirkaLauncher.runSkeletonApp('portfolio', 'scripts/portfolio/data/content.yaml');
      }
    );
  });
