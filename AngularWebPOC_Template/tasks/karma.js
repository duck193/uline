module.exports = function(grunt) {

  grunt.config('karma', {
    unit: {
      configFile: 'karma.conf.js',
      autoWatch: false,
      singleRun: true
    }
  });

  grunt.loadNpmTasks('grunt-karma');
};