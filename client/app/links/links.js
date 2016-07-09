angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  console.log('linkscontroller');
  Links.getAll().then(function(data) {
    $scope.data.links = data;
    console.log("000000000000000000000" + data);
  });
});
