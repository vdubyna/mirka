Mirka Website
------------

Is based on Angular and foundation. It is stateless file-based application which allows
 to configure Single page website without server side.

### Install

```bash
npm install
bower install
grunt build
```

### General vision

`scripts/mirka` is a set of libs based on angular module ideology
It consists of the next modules:
* mirkaContent (scripts/mirka/content) - allows to have a simple access in the templates
 example:

 ```html
 <h2>{{ $content.get('content.hi') }}</h2>
 ```
 Where content is loaded before application bootstrap through public method
 `$contentProvider.setContent()`

 __$content__ itself is an angular provider see: [Providers](https://egghead.io/lessons/angularjs-providers)
 To be able to use it in the templates you have to add it to the `$rootScope` example:

 ```javascript
 angularModule
    .run([
        "$rootScope",
        "$content",
        function ($rootScope, $content) {
          $rootScope.$content  = $content;
        }
      ]);
 ```

* mirkaDesign (scripts/mirka/design) - is a helper utility which provides methods to manage stylesheets
 on the pages. See public methods of the __$design__ factory which allows to add stylesheets and scan definite
 stylesheets for controllers example:

 ```javascript
 mirkaSkeleton.config([
   "$routeProvider",
   function ($routeProvider) {
     $routeProvider
       .when("/", {
         templateUrl: 'default.html',
         controller: "mirkaSkeletonCtrl",
         css: ['my.css']
       })
   }])
 ```

* mirkaSkeleton (scripts/mirka/skeleton) - is a module that provides interface of the application structure
 if you want to create an application based on __mirkaSkeleton__ you have to extend it.
 See example in `scripts/portfolio`









