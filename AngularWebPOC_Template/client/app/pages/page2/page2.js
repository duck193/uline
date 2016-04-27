'use strict';
angular.module('ngmp.page2', [
    'ngmp',
    'ui.router',
    'ngmp.modules.header',
    'ngmp.modules.footer',
    'ngmp.page2.controller',
    'ngmp.page2.sampleView3',
    'ngmp.page2.sampleView4',
    'templates-app'
  ])
  .config(function indexConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('page2', {
        url: '/',
        views: {
          'header': {
            controller: 'HeaderCtrl as headerCtrl',
            templateUrl: 'app/common/modules/header/header.template.html'
          },
          'sampleView3': {
            controller: 'SampleView3Ctrl as sampleView3Ctrl',
            templateUrl: 'app/pages/page2/sample-view-3/sample-view-3.template.html'
          },
          'sampleView4': {
            controller: 'SampleView4Ctrl as sampleView4ctrl',
            templateUrl: 'app/pages/page2/sample-view-4/sample-view-4.template.html'
          },
          'footer': {
            controller: 'FooterCtrl as footerCtrl',
            templateUrl: 'app/common/modules/footer/footer.template.html'
          }
        }
      });
  })
  .run(function ($rootScope) {
    $rootScope.pageName = 'page2';
  });
