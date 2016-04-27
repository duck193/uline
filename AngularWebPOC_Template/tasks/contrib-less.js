module.exports = function(grunt) {

  grunt.config('less', {
    options: {
      paths: './',
      sourceMap: true,              //this sourceMap not make it to dist, just build (development mode)
      sourceMapFilename: '<%= build_dir %>/public/css/main.css.map', // put it next to the css file
      sourceMapURL: 'main.css.map', //relative path, next to the css file
      outputSourceFiles: true       //we don't serve up the less files, so we need to include them in the sourceMap
    },
    compile: {
      files: {
        '<%= build_dir %>/public/css/main.css': '<%= app_files.less %>'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
};
