module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss', 'bower_components/font-awesome/scss']
      },
      dist: {
        files: {
          'theme/onepage/css/vendor.css': 'theme/onepage/scss/vendor.scss',
          'theme/onepage/css/app.css': 'theme/onepage/scss/styles.scss'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'theme/onepage/scss/**/*.scss',
        tasks: ['sass']
      }
    },

    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      scripts: {
        options: {
          destPrefix: 'scripts/vendor'
        },
        files: {
          'jquery/jquery.js': 'jquery/dist/jquery.js',
          'jquery/plugins/jquery-nicescroll.js': 'jquery-nicescroll/jquery.nicescroll.js',
          'angular/angular.js': 'angular/angular.js',
          'angular/angular-resource.js': 'angular-resource/angular-resource.js',
          'angular/angular-route.js': 'angular-route/angular-route.js',
          'angular/angular-sanitize.js': 'angular-sanitize/angular-sanitize.js',
          'requirejs/require.js': 'requirejs/require.js',
          'foundation/foundation.js': 'foundation/js/foundation.js',
          'modernizr/modernizr.js': 'modernizr/modernizr.js',
          'angular/angular-marked.js': 'angular-marked/angular-marked.js',
          'yaml/js-yaml.js': 'js-yaml/dist/js-yaml.js',
          'markdown/marked.js': 'marked/lib/marked.js',
          'highlight/highlight.js': 'highlightjs/highlight.pack.js'
        }
      },
      fonts: {
        files: {
          'theme/onepage/fonts': 'font-awesome/fonts'
        }
      }

    },

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      target: ['scripts/app']
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build', ['bowercopy']);
  grunt.registerTask('default', ['build','watch']);
}