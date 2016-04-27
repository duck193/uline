module.exports = function(grunt) {

  grunt.config('filerev', {
    options: {
      algorithm: 'md5',
      length: 8
    },
    assets: {
      //        src: 'dist/public//**/*.{jpg,jpeg,gif,png,webp}',
      src: 'dist/public/{app,css}/**/*.{js,css}'
    }
  });

  grunt.loadNpmTasks('grunt-filerev');
};