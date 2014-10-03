Mirka Website
------------

Is based on Angular and foundation. It is stateless file-based application which allows
 to configure Single page website without server side.

### Install

```bash
gem install foundation
npm install
bower install
grunt build
```

### Roadmap

* Improve modularity to be able to use custom js and plugins
* Rethink theme and Project (is it the same or not)
* Resolve media directory
* Implement pages functionality with markdown


### General Vision

1. Mirka - is a platform to build simple web application based on file data source
    Mirka includes next components:
    - mirkaCore    - general dependency of the platform
    - mirkaContent - loads data source and provides simple interface to it
    - mirkaDesign  - provides theming system

2. Mirka Project
 Mirka is an abstraction and could not be used by itself. It should instantiate a definite project
 Each project includes 1 or more themes. Themes are only styling layer and don't content any
 javaScript or html views
 If you want to customize current project than create own project based on the one you want to extend.



