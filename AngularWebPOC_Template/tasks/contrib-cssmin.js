module.exports = function(grunt) {

  grunt.config('cssmin', {
      options: {
        // cssmin does not create sourcemaps. We only use css sourcemaps in development mode, created by contrib-less.
      }
    });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
};