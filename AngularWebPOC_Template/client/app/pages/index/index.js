'use strict';
angular.module('ngmp.index', [
    'ngmp',
    'ui.router',
    'ngmp.modules.header',
    'ngmp.modules.footer',
    'ngmp.index.controller',
    'ngmp.index.sampleView1',
    'ngmp.index.sampleView2',
    'templates-app'
  ])
  .config(function indexConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        views: {
          'header': {
            controller: 'HeaderCtrl as headerCtrl',
            templateUrl: 'app/common/modules/header/header.template.html'
          },
          'sampleView1': {
            controller: 'SampleView1Ctrl as sampleView1Ctrl',
            templateUrl: 'app/pages/index/sample-view-1/sample-view-1.template.html'
          },
          'sampleView2': {
            controller: 'SampleView2Ctrl as sampleView2Ctrl',
            templateUrl: 'app/pages/index/sample-view-2/sample-view-2.template.html'
          },
          'footer': {
            controller: 'FooterCtrl as footerCtrl',
            templateUrl: 'app/common/modules/footer/footer.template.html'
          }
        }
      });
  })
  .run(function ($rootScope) {
    $rootScope.pageName = 'index';
  });
