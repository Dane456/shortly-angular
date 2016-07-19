angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $window, Links) {
  // Your code here
  $scope.linkInput = {url: ''};
  if (!$window.localStorage['com.shortly']) {
    $location.path('/signin');
  }
  $scope.addLink = function() {
    Links.addOne($scope.linkInput);
  };

});
