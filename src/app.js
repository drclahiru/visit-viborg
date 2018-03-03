(function () {
'use strict';

angular.module('app', ['ngRoute', 'LocationsController'])
.config(RoutesConfig);

RoutesConfig.$inject = ['$routeProvider'];
function RoutesConfig($routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: 'src/templates/locationlist.template.html',
      controller: 'ListController'
    })
    .when('/details/:itemId', {
      templateUrl: 'src/templates/details.template.html',
      controller: 'DetailsController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}
})();
