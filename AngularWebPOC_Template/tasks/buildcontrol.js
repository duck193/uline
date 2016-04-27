module.exports = function(grunt) {
  //Deploy the built application to heroku. You must have a git repo sitting in the build
  //folder and have a 'heroku-dev' remote added that points to your heroku repo.
  grunt.config('buildcontrol', {
    options: {
      dir: 'dist',
      commit: true,
      push: true,
      connectCommits: false,
      message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
    },
    'heroku-dev': {
      options: {
        remote: 'heroku-dev',
        branch: 'master' //destination branch (heroku always goes off master)
      }
    },
    'heroku-qa': {
      options: {
        remote: 'heroku-qa',
        branch: 'master'
      }
    }

    //add more heroku instances here...
  });

  grunt.loadNpmTasks('grunt-build-control');
};