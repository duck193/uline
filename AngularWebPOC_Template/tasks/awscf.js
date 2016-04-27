module.exports = function (grunt) {
  grunt.registerMultiTask('awscf', function() {
    var aws = require('aws-sdk');
    var _ = require('lodash');
    var moment = require('moment');

    var taskName = (this.args && this.args[0]) || 'deploy';
    var options = this.options();
    var templateFile = options.templateFile;
    var userConfig = require('../build.config.js')(grunt);
    var envConfig = require('../' + this.data.config);
    var cf = new aws.CloudFormation({
      region: userConfig.aws.region,
      accessKeyId: userConfig.aws.accessKey,
      secretAccessKey: userConfig.aws.secretKey
    });

    var s3 = new aws.S3();

    function createOrUpdateStack(callback) {
      var archive = options.src;
      var timestamp = moment().format('YYYY-MM-DD-hh-mm-ss');
      var s3Key = grunt.config('pkg.name') + '_' + timestamp + '.zip';

      var archiveContent = grunt.file.read(archive, {encoding: null});
      if (!archiveContent) {
        return callback({message: 'File ' + archive + ' not found.'});
      }

      grunt.log.writeln('Uploading ' + archive + ' to ' + options.s3Bucket + '/' + s3Key);
      s3.putObject({
        Bucket: options.s3Bucket,
        Key: s3Key,
        Body: grunt.file.read(archive, { encoding: null })
      }, function(err, data) {
        if (err) {
          grunt.log.error('Error uploading archive to S3.', err);
          return callback(err);
        }

        var stackName = grunt.config('pkg.name') + '-' + envConfig.name;
        cf.describeStacks({
          StackName: stackName
        }, function(err, response) {

          grunt.log.writeln('Options: ' + JSON.stringify(options, null, 2));
          var params = {
            StackName: stackName,
            TemplateBody: grunt.file.read(templateFile),
            Parameters: [
              {
                ParameterKey: 'KeyName',
                ParameterValue: options.keyName
              }, {
                ParameterKey: 'AsgMinSize',
                ParameterValue: options.asgMinSize.toString()
              }, {
                ParameterKey: 'AsgMaxSize',
                ParameterValue: options.asgMaxSize.toString()
              }, {
                ParameterKey: 'S3Bucket',
                ParameterValue: options.s3Bucket
              }, {
                ParameterKey: 'S3Key',
                ParameterValue: s3Key
              }, {
                ParameterKey: 'NodeEnvironment',
                ParameterValue: envConfig.name
              }, {
                ParameterKey: 'NodeVersion',
                ParameterValue: options.nodeVersion
              }, {
                ParameterKey: 'InstanceType',
                ParameterValue: options.instanceType
              }
            ]
          };

          if (err || !(response.Stacks && response.Stacks[0])) {
            grunt.log.writeln('No existing %s stack found; creating new stack', stackName);
            cf.createStack(params, callback)
          }
          else {
            grunt.log.writeln('Found existing %s stack; performing an update.', stackName);
            cf.updateStack(params, callback);
          }
        });
      });
    };

    function describeStack(callback) {
      cf.describeStacks({
        StackName: grunt.config('pkg.name') + '-' + envConfig.name
      }, function(err, response) {
        if (err || !(response.Stacks && response.Stacks[0])) {
          grunt.log.warn('Stack %s Not Found', grunt.config('pkg.name'));
          return callback();
        }
        grunt.log.writeln(JSON.stringify(response, null, 2));
        callback();
      });
    }

    function deleteStack(callback) {
      cf.deleteStack({
        StackName: grunt.config('pkg.name') + '-' + envConfig.name
      }, function (err, response) {
        if (err) {
          callback(err);
        }
        else {
          callback();
        }
      })
    }

    var done = this.async();
    switch(taskName) {
      case 'deploy':
        createOrUpdateStack(done);
        break;
      case 'describe':
        describeStack(done);
        break;
      case 'delete':
        deleteStack(done);
        break;
      default:
        grunt.fail.fatal('Unknown task ' + taskName + '; Task must be deploy, describe, or delete, or describe.');
    }
  });

  grunt.config('awscf', {
    options: {
      region: '<%= aws.region %>',
      s3Bucket: '<%= aws.s3Bucket %>',
      src: '<%= dist_dir %>/<%= pkg.name %>.zip',
      keyName: '<%= aws.keyName %>',
      asgMinSize: '<%= aws.asgMinSize %>',
      asgMaxSize: '<%= aws.asgMaxSize %>',
      instanceType: '<%= aws.instanceType %>',
      nodeVersion: '0.10.31',
      templateFile: 'tools/aws/cloudformation/cf-elastic-beanstalk-template.json'
    },
    dev: {
      config: 'server/config/env/aws-dev.js'
    },
    production: {
      config: 'server/config/env/production.js'
    }
  });
};
