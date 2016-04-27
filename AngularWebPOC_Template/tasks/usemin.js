module.exports = function(grunt) {

  grunt.config('useminPrepare', {
    html: 'build/public/*.html',
    options: {
      root: 'build/public',
      dest: 'dist/public'
    }
  });

  grunt.config('usemin', {
    html: 'dist/public/*.html'
  });


  grunt.loadNpmTasks('grunt-usemin');
};