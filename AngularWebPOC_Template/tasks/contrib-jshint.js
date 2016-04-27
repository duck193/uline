module.exports = function(grunt) {

  grunt.config('jshint', {
    src: [
      'client/<%= app_files.js %>',
      '!client/app/**/*.spec.js'
    ],
    options: {
      jshintrc: 'client/.jshintrc'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};