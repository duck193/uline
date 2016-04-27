module.exports = function(grunt) {

  grunt.config('jade', {
    compile: {
      files: [{
        src: ['app/**/*.jade'],
        cwd: 'client',
        dest: '<%= temp_dir %>/partials',
        filter: 'isFile',
        expand: true,
        flatten: false,
        rename: function(dest, fname) {
          return dest + '/' + fname.replace(/\.jade$/, '.html');
        }
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');

};