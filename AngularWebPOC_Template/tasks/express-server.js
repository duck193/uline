module.exports = function(grunt) {

  grunt.config('express',{
      dist: {
        options: {
          script: 'dist/server/server.js',
          port: 9000
        }
      },
      dev: {
        options: {
          script: 'server/server.js',
          port: 9000
        }
      }
    });

  grunt.loadNpmTasks('grunt-express-server');
};