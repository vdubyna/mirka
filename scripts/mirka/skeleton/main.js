"use strict";

require(
  ["scripts/mirka/main"],
  function () {
    require(["mirka/skeleton/launcher"],
      function (mirkaLauncher) {
        mirkaLauncher.runSkeletonApp('mirka/skeleton', 'scripts/mirka/skeleton/data/content.yaml');
      }
    );
  });
