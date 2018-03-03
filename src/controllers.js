(function () {
'use strict';

angular.module('LocationsController', [])
.controller('ListController', ListController)
.controller('DetailsController', DetailsController);

ListController.$inject = ['$scope', '$http'];
function ListController($scope, $http) {

  $http.get('data/data.json').success(function (data) {
    $scope.locations = data;
  });
  $scope.sortLoacations = '-1';
}

DetailsController.$inject = ['$scope', '$http', '$routeParams'];
function DetailsController($scope, $http, $routeParams) {

  $http.get('data/data.json').success(function (data) {
    $scope.locations = data;
    $scope.itemId = $routeParams.itemId;
    $scope.firstLocation = 0;
    $scope.lastLocation = $scope.locations.length-1;

    if ($routeParams.itemId > 0) {
      $scope.previousLocation = Number($routeParams.itemId)-1;
    } else {
      $scope.previousLocation = $scope.locations.length-1;
    }

    if ($routeParams.itemId < $scope.locations.length-1) {
      $scope.nextLocation = Number($routeParams.itemId)+1;
    } else {
      $scope.nextLocation = 0;
    }
  });
}
})();
