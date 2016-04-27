module.exports = function(grunt) {

  grunt.config('ngAnnotate', {
      app: {
        files: [{
          expand: true,
          src: ['<%= build_dir %>/**/*.js'],
          ext: '.js',
          extDot: 'last'
        }]
      }
    });

  grunt.loadNpmTasks('grunt-ng-annotate');
};