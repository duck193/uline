module.exports = function(grunt) {

  grunt.config('watch', {
    options: {
      interval: 500
    },
    express: {
      files: ['server/**/*.js'],
      tasks: ['express:dev'],
      options: {
        spawn: false
      }
    },
    js: {
      files: ['client/app/**/*.js'],
      tasks: ['jshint:src', 'copy:build', 'injector', 'karma:unit']
    },
    jsunit: {
      files: ['client/app/**/*.spec.js'],
      tasks: ['karma:unit']
    },
    less: {
      files: ['client/app/**/*.less'],
      tasks: ['less:compile']
    },
    jade: {
      files: ['client/app/**/*.jade'],
      tasks: ['jade', 'html2js']
    },
    assets: {
      files: ['client/assets/**/*'],
      tasks: ['copy:build', 'injector']
    },
    html: {
      files: ['client/app/pages/*/*.html'],
      tasks: ['copy:build', 'injector']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
