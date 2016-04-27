angular.module('ngmp.filters.sampleDateFilter', []).filter('sampleDateFilter', function() {
  return function(date) {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  };
});
