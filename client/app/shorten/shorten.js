angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $window, Links) {
  // Your code here
  $scope.link = {};
  if (!$window.localStorage['com.shortly']) {
    $location.path('/signin');
  }
  $scope.addLink = function() {
    var input = {url: $scope.linkInput};
    Links.addOne(input);
  };
});
