"use strict";

require.config({
  "baseUrl": "scripts",
  "paths": {
    "angular"         : "vendor/angular/angular",
    "angular-route"   : "vendor/angular/angular-route",
    "angular-resource": "vendor/angular/angular-resource",
    "angular-sanitize": "vendor/angular/angular-sanitize",

    "jquery"          : "vendor/jquery/jquery",
    "foundation"      : "vendor/foundation/foundation",
    "yaml"            : "vendor/yaml/js-yaml"
  },
  "shim": {
    "angular"         : {exports: "angular"},
    "angular-route"   : ["angular"],
    "angular-resource": ["angular"],
    "angular-sanitize": ["angular"],

    "jquery"          : {exports: "jQuery"},
    "foundation"      : {deps: ["jquery"]}
  },
  "priority": ["jquery", "angular"]
});