angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, $window, Links) {
  // Your code here
  $scope.data = {};
  if (!$window.localStorage['com.shortly']) {
    $location.path('/signin');
  } else {
    Links.getAll().then(function(data) {
      $scope.data.links = data;
    });
  }
});
