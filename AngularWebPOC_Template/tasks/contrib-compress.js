module.exports = function(grunt) {

  grunt.config('compress', {
    dist: {
      options: {
        archive: 'dist/<%= pkg.name %>.zip'
      },
      expand:true,
      cwd: 'dist',
      src: ['**/*']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
};