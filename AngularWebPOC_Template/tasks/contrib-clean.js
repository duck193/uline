module.exports = function(grunt) {
  grunt.config('clean', {
    build: [
      '<%= temp_dir %>',
      '<%= build_dir %>/*',
      '!<%= build_dir %>/.git*',
      '!<%= build_dir %>/Procfile'
    ],
    compile: [
      '<%= compile_dir %>'
    ],
    dist: [
      '<%= dist_dir %>/*',
      '!<%= dist_dir %>/.git*',
      '!<%= dist_dir %>/Procfile'
    ]
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};